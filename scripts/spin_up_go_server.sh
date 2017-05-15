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
# text styles
bold=$(tput bold)
normal=$(tput sgr0)

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
    docker run \
      --name $app_container \
      -v $(pwd)/goServer/static:/web-server/static \
      -v $(pwd)/goServer/ng:/web-server/ng \
      -v $(pwd)/goServer/index.html:/web-server/index.html \
      -p 8082:8082 \
      -d $docker_img
  else
    echo "container already exists!"
    echo "to spin up a new one, remove the old one first and run ${bold}./scripts/spin_up_go_server.sh${normal} command again"
    echo "otherwise ${bold}docker restart <container-name>${normal} or ${bold}docker restart <container-id>${normal}"
  fi
}

# execute func
create_img_and_spin_up_go_server $DOCKER_NAME_GO_SERVER $DOCKER_IMG_VERSION_GO_SERVER