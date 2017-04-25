#!/bin/bash
# 
# Program:
# Do dockerized e2e testing inside Docker container
# Author:
# Alan Tai
# History:
# 04/25/2017
# Note:
# Please follow Google Shell Style Guide of Shell/Bash

set_env_variables () {
  # export env. variables
  source $(pwd)/scripts/environment_variables
}

############################################
# Global varialbles
############################################
OPT=""
URL=""
TARGET_URL=""
APP_IMAGE=""
APP_CONTAINER=""
NO_ARGS=0
E_OPTERROR=85

create_docker_img_container () {
  # create image if not exist
  local app_image="$IMG_NAME:$IMG_VERSION"
  APP_IMAGE=$app_image

  local inspect_result=$(docker inspect $app_image)

  if [[ "[]" == "$inspect_result" ]]; then
    echo "Docker image, $app_image, not exist and a new one will be created"
    docker build -t ${app_image} -f $(pwd)/scripts/testing/Dockerfile .
  else
    echo "Docker image, $app_image, already exist"
  fi
}


######################
# Go through all steps
######################

set_env_variables

create_docker_img_container
