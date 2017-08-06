#!/bin/bash
#
# Program:
# Do unit testing inside Docker container
# Author:
# Alan Tai
# History:
# 04/24/2017
# Note:
# Please follow Google Shell Style Guide of Shell/Bash


############################################
# Set environment variables
# Globals:
#   None
# Arguments:
#   None
# Returns:
#   None
############################################
set_env_variables () {
  # export env. variables
  source $(pwd)/scripts/testing/environment_variables
}


############################################
# Create Docker container for unit testing
# Globals:
#   None
# Arguments:
#   None
# Returns:
#   None
############################################
do_unit_testing () {
  local app_image="$IMG_NAME:$IMG_VERSION"
  local commands=(
    "cd /app/ && "
    "ng test --single-run --code-coverage"
  )

  # switch to Angular CLI dir
  cd ./ngCliLazyLoading && \
  docker run \
    --name scm-ui-unit-testing \
    -v $(pwd):$USER_HOME_DIR \
    --rm $app_image \
    sh -c "${commands[*]}"
}

############################################
# Remove Docker volumes
# Globals:
#   None
# Arguments:
#   None
# Returns:
#   None
############################################
clean_up_docker_volumes () {
  # clean up docker volumes; this part can be put in a function
  docker run \
    -v /var/run/docker.sock:/var/run/docker.sock \
    -v /var/lib/docker:/var/lib/docker \
    --rm martin/docker-cleanup-volumes
}


######################
# Go through all steps
######################
set_env_variables

do_unit_testing

clean_up_docker_volumes
