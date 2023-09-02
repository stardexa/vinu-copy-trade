FROM node:18.12-alpine

RUN mkdir /app

WORKDIR /app

COPY ./package.json ./package-lock.json /app/

RUN npm install

COPY . /app/

EXPOSE 4004

RUN npm run build

CMD [ "npm", "start", "--", "--port", "4004"]
