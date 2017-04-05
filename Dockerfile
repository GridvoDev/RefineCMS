FROM node:latest
MAINTAINER JeMoGeS <510015341@qq.com>
COPY ./package.json /home/refinecms/
WORKDIR /home/refinecms
RUN ["npm","config","set","registry","http://registry.npm.taobao.org"]
RUN ["npm","install","--save","keystone@0.3.19"]
RUN ["npm","install","--save","async@1.5.0"]
RUN ["npm","install","--save","lodash@4.13.1"]
RUN ["npm","install","--save","dotenv@2.0.0"]
RUN ["npm","install","--save","connect-mongo@1.3.2"]
RUN ["npm","install","--save","eslint@2.12.0"]
RUN ["npm","install","--save","eslint-config-keystone@2.3.1"]
RUN ["npm","install","--save","eslint-plugin-react@5.1.1"]
RUN ["npm","install","--save","gulp@3.7.0"]
RUN ["npm","install","--save","gulp-shell@0.5.0"]
RUN ["npm","install","--save","gulp-watch@4.3.5"]
COPY ./keystone.js keystone.js
COPY ./gulpfile.js gulpfile.js
COPY ./models models
COPY ./public public
COPY ./routes routes
COPY ./templates templates
COPY ./updates updates
COPY ./.editorconfig .editorconfig
COPY ./.env .env
COPY ./.eslintignore .eslintignore
COPY ./.eslintrc .eslintrc
COPY ./Procfile Procfile

VOLUME ["/home/refinecms"]
ENTRYPOINT ["node"]
CMD ["node","keystone.js",">>","run.log"]
CMD ["node","-v"]
