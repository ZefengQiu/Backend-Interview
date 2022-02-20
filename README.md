# Backend Interview

## Description
This project is for ResQ interview, URL shortener API

## How to run the project

* npm install (install packages)
* npm start
* npm run test (run unit test)

## How to test the result

Using Postman, import file - URLShortener.postman_collection.json to Postman.

## Scalability

Project is simple version of a shorten URL service will work in a node js application. If 
want to deploy it in real life which considering ability to handle larger amount of traffic. I would plan to
use AWS API gateway, lambda function, and redis. Detail of system is in diagram.
