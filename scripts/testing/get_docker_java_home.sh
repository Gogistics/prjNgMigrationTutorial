#!/bin/bash
# Program:
# get dir of javac/java
# History:
# 04/02/2017
# Reference:
# https://jaxenter.com/build-and-test-angular-apps-using-docker-132371.html
set -e
dirname "$(dirname "$(readlink -f "$(which javac || which java)")")"