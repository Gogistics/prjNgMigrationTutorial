# Grep base image of Debian Jessie
FROM  golang

# maintainer
MAINTAINER  Alan Tai <alan.tai@riverbed.com>

# add required files
ADD ./goServer/web_server.go /web-server/

RUN cd /web-server/ && go build web_server.go

WORKDIR /web-server/

CMD ./web_server