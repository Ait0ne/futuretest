FROM node:12.18.3

WORKDIR /usr/src/test

COPY ./ ./

RUN npm install
RUN npm install -g serve
RUN npm run build

EXPOSE 5000

CMD ["serve", "-s", "build"]