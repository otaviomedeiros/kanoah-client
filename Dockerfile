FROM node:argon

RUN npm install -g nodemon karma-cli gulp-cli

RUN mkdir /app
WORKDIR /app

COPY . .

COPY package.json .
RUN npm install phantomjs-prebuilt
RUN npm install

RUN node_modules/.bin/webpack

CMD [ "npm", "start" ]
