FROM nginx:1.15-alpine

LABEL MAINTAINER="beginor"

COPY dist/ng-seed /usr/share/nginx/html/ng-seed
