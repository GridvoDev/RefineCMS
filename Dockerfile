FROM node:latest
MAINTAINER JeMoGeS <510015341@qq.com>
COPY ./package.json /home/RefineCMS/
WORKDIR /home/RefineCMS
RUN ["npm","config","set","registry","http://registry.npm.taobao.org"]
RUN ["npm","install","--save"]
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

VOLUME ["/home/RefineCMS"]
ENTRYPOINT ["node"]
CMD ["keystone.js >> run.log"]
