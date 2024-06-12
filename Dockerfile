FROM node:18.15-slim

WORKDIR /src

COPY --link package.json .
COPY --link package-lock.json .
RUN npm install --production=false

COPY --link . .
RUN npm run build
RUN npm prune

USER node

ENV HOST=0.0.0.0

EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]