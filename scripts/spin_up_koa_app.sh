#!/bin/bash
#
# Author:
# Alan Tai
# History:
# 04/16/2017
#
# Note:
# Please follow Google Shell Style Guide of Shell/Bash

# set environment variables
source $(pwd)/scripts/environment_variables

#############################################################
# Create docker mage and spin up container running Koa app
# Globals:
#   None
# Arguments:
#   DOCKER_NAME_KOA_APP
#   DOCKER_IMG_VERSION_KOA_APP
# Returns:
#   None
#############################################################
create_img_and_spin_up_koa_app() {
  local mode=$3
  local app=$4

  local app_local_src="ngCliLazyLoading/dist"
  local app_docker_src="/app/ng" # default

  if [[ $mode == 'existing' ]]; then
    app_local_src="appKoa/src-existing"
    app_local_ng_src="ngCliLazyLoading"
    app_docker_src="/app/koa"
    app_docker_ng_src="/app/koa/ng"
  elif [[ $mode == 'migration' ]]; then
    cp -r $(pwd)/ngCliLazyLoading/dist/* $(pwd)/appKoa/src-migration/ng/
    app_local_src="appKoa/src-migration"
    app_docker_src="/app/koa"
  fi

  # create docker image
  local docker_img="$1:$2"
  local inspect_result=$(docker inspect $docker_img)

  if [[ "[]" == "$inspect_result" ]]; then
    # not exist and create new one
    echo "image not exists and new one will be created"
    docker build -t $docker_img -f $PWD/appKoa/Dockerfile .
  else
    echo "image already exists"
  fi

  local app_container="$1"
  local inspect_result=$(docker inspect $app_container)

  if [[ "[]" == "$inspect_result" ]]; then
    echo "container not exists and new one will be created"
  else
    echo "$app_container already exist and will be restart"
    docker rm -f $app_container
  fi
  commands=(
      "cd /app/ && "
      "NODE_ENV=$mode node app.js --harmony-async-await"
    )
  docker run --name $app_container \
    -p 8081:8081 \
    -v $(pwd)/$app_local_src:$app_docker_src \
    -v $(pwd)/$app_local_ng_src:$app_docker_ng_src \
    -d $docker_img \
    sh -c "${commands[*]}"
}


# read arguments (option and the corresponding value)
E_OPTERROR=1
MODE=""
APP=""

# check if user pass arguments
[[ $# -eq 0 ]] && echo "No arguments supplied" && exit $E_OPTERROR

while [[ $# -gt 1 ]]; do
  key="$1"
  case $key in
      -m|--mode)
      if [[ $2 =~ dev|prod|existing|migration ]]; then
        MODE="$2"
      else
        echo ERROR: "Unsupported MODE $2"
        exit $E_OPTERROR
      fi
      shift # past argument
      ;;
      -a|--app)
      if [[ $2 =~ koa|go ]]; then
        APP="$2"
      else
        echo ERROR: "Unsupported APP $2"
        exit $E_OPTERROR
      fi
      shift # past argument
      ;;
      *)
        # unknown option
        echo ERROR: "Unknown option $1" >&2
        exit $E_OPTERROR
      ;;
  esac
  shift # past argument or value
done
echo MODE = "${MODE}"
echo APP = "${APP}"


# start to run the app inside container
create_img_and_spin_up_koa_app $DOCKER_NAME_KOA_APP $DOCKER_IMG_VERSION_KOA_APP $MODE $APP