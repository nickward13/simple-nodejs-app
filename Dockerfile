FROM alpine
RUN apk update && apk upgrade
RUN apk add nodejs
RUN apk add npm
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8080
CMD [ "npm", "start" ]
