FROM node:13.8.0

ENV PATH=/opt/node_modules/.bin:$PATH

WORKDIR /opt/app

RUN mkdir -p /opt/node_modules/.cache && chown -R node:node /opt/*


RUN echo "--modules-folder /opt/node_modules" >> /home/node/.yarnrc && echo "--cache-folder /opt/node_modules/.cache" >> /home/node/.yarnrc

COPY ["package.json", "yarn.lock", "/opt/app/"]

USER node

RUN yarn install

COPY [".", "/opt/app/"]

USER root

RUN chown node:node /opt/app

USER node

ENTRYPOINT ["yarn", "start"]
