# Kanoah Client
Simple web client for Kanoah Test Manager

## Steps to run the app 

Clone the repo and cd into folder

`git clone git@github.com:otaviomedeiros/kanoah-client.git`

`cd kanoah-client/`

## With Docker

Build the image

`docker-compose build`

Create a `.env` file based on `.env.sample` and set username and password 

Run the app container

`docker-compose up`

To develop you are gonna need to run a gulp task that watcher for changes in ES6 code and transpiles it to public/assests

`docker exec app gulp watch`

The app is gonna be accessible on port 8080

Run tests

`docker exec app npm test`


## Without Docker

Set some env vars

`KANOAH_API_USERNAME=<user>`

`KANOAH_API_PASSWORD=<password>`

`KANOAH_API_BASE_URL=http://staging.kanoah.com/rest/kanoahtests/1.0`

Install packages

`npm install`

`npm install -g nodemon karma-cli`

Finally, to run the app

`npm start`

Access `http://localhost:8080`

To develop you are gonna need to run a gulp task that watcher for changes in ES6 code and transpiles it to public/assests

`gulp watch`

To run tests

`npm test`
