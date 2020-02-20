# theScoreBackend

## Description
This project is for https://github.com/tsicareers/nfl-rushing theScore interview. Sorry about I did not create a front end with it cuz the role is backend dev. 

I used Node js with Express to create this backend API.

## How to run the project

* npm install (install packages)
* npm start

## How to test the result

Using Postman (or similar tool to test API). Open Postman, root URL is localhost:8080/

1. GET localhost:8080/players  request-body: empty -- get all players in csv file
2. GET localhost:8080/players  request-body: { "order": "total_rushing_yards"} -- get all players sorted by total_rushing_yards
3. GET localhost:8080/players  request-body: { "order": "longest_rush"} -- get all players sorted by longest_rush
4. GET localhost:8080/players  request-body: { "order": "total_touchdowns"} -- get all players sorted by total_touchdowns
5. GET localhost:8080/players  request-body: { "name": "player's name"} -- get all the player by name
6. If request or request body is invalid, return 400 with error msg.


