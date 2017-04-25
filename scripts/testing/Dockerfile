# Grep base image of Debian Jessie
FROM  debian:jessie

# maintainer
MAINTAINER  Alan Tai <alan.tai@riverbed.com>

# add scripts
ADD ./scripts/testing/xvfb-chromium /usr/bin/xvfb-chromium
ADD ./scripts/testing/get_docker_java_home.sh /usr/local/bin/docker-java-home
ADD ./scripts/testing/dumb-init_1.2.0_amd64 /usr/bin/dumb-init
ADD ./scripts/environment_variables /app/

# commands
RUN set -a && . /app/environment_variables && \
    apt-get update && \
    set -xe && \
    apt-get -y install apt-utils curl nano git sudo build-essential chromium xvfb bzip2 unzip xz-utils && \
    chmod +x /usr/bin/dumb-init && \
    curl -sL https://deb.nodesource.com/setup_7.x | sudo -E bash - && \
    DEBIAN_FRONTEND=noninteractive apt-get install -y nodejs && \
    apt-get update && \
    npm install @angular/cli@${NG_CLI_VERSION} -g && \
    ln -s /usr/bin/xvfb-chromium /usr/bin/google-chrome && \
    ln -s /usr/bin/xvfb-chromium /usr/bin/chromium-browser && \
    rm -rf /var/lib/apt/lists/* && \
    echo 'deb http://deb.debian.org/debian jessie-backports main' > /etc/apt/sources.list.d/jessie-backports.list && \
    chmod +x /usr/local/bin/docker-java-home && \
    set -x && \
    apt-get update && \
    apt-get install -y \
    openjdk-8-jdk="$JAVA_DEBIAN_VERSION" \
    ca-certificates-java="$CA_CERTIFICATES_JAVA_VERSION" && \
    rm -rf /var/lib/apt/lists/* && \
    [ "$JAVA_HOME" = "$(docker-java-home)" ] && \
    /var/lib/dpkg/info/ca-certificates-java.postinst configure && \
    apt-get clean && \
    npm cache clean

# set dumb-init as entrypoint
ENTRYPOINT ["/usr/bin/dumb-init", "--"]

