FROM node:13.0.1

ENV PATH=/opt/node_modules/.bin:$PATH

WORKDIR /opt/app

RUN mkdir -p /opt/node_modules/.cache && chown -R node:node /opt/*

USER node

RUN echo "--modules-folder /opt/node_modules" >> /home/node/.yarnrc && echo "--cache-folder /opt/node_modules/.cache" >> /home/node/.yarnrc

COPY --chown=node:node ["package.json", "yarn.lock", "/opt/app/"]

RUN yarn install

COPY --chown=node:node [".", "/opt/app/"]

ENTRYPOINT ["yarn", "start"]
