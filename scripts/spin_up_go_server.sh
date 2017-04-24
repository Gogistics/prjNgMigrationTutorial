#!/bin/bash
#
# Author:
# Alan Tai

# set environment variables
source $(pwd)/scripts/environment_variables


#############################################################
# Create docker mage and spin up container running Go server
# Globals:
#   None
# Arguments:
#   DOCKER_NAME_GO_SERVER
#   DOCKER_IMG_VERSION_GO_SERVER
# Returns:
#   None
#############################################################
create_img_and_spin_up_go_server() {
  # create docker image
  local docker_img="$1:$2"
  local inspect_result=$(docker inspect $docker_img)

  if [[ "[]" == "$inspect_result" ]]; then
    # not exist and create new one
    echo "image not exists and new one will be created"
    docker build -t $docker_img -f $PWD/goServer/Dockerfile .
  else
    echo "image already exists"
  fi

  local app_container="$1"
  local inspect_result=$(docker inspect $app_container)

  if [[ "[]" == "$inspect_result" ]]; then
    echo "container not exists and new one will be created"
    docker run --name $app_container -p 8080:8080 -d $docker_img
  fi
}

# execute func
create_img_and_spin_up_go_server $DOCKER_NAME_GO_SERVER $DOCKER_IMG_VERSION_GO_SERVER