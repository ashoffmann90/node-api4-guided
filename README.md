# Web API Deployment Challenge

Guided project for **Web API IV** module.

In this project we will learn how to deploy a Web API to `heroku`.

## Prerequisites

- Sign up for a [heroku](https://www.heroku.com/) free account.

## Instructions

Please fork this repository and follow along **using your fork** as the instructor deploys the API to `heroku`.

## Environment Variables

Each dev must configure the following environment variables:
- API_SECRET: used to restrict acces to the POST '/api/shouts'

## Deployment

-Make the PORT dynamic.
-Provide "start" script in package.json, that uses "node" to run the API. (Heroku will run the app using "npm start")(Heroku does not load Dev Dependencies.)
-Add "require('dotenv').config()" to the top of your index.js.
-npm i dotenv