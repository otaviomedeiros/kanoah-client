FROM node:argon

RUN npm install -g nodemon karma-cli gulp-cli

RUN mkdir /app
WORKDIR /app

COPY package.json .
RUN npm install

COPY . .

EXPOSE 8080
CMD [ "npm", "start" ]
