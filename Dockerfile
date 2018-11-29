FROM nginx:1.15-alpine

LABEL MAINTAINER="beginor"

COPY default.conf /etc/nginx/conf.d/default.conf
COPY dist/ng-seed /usr/share/nginx/html/ng-seed
