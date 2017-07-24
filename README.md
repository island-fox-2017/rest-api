# FirstApp
### This is the first app with RESTful-API

    Actions:
    npm init
    express --save=ejs
    npm install --save sequelize
    npm install --save sequelize-cli
    sequelize init

psql postgres
CREATE DATABASE "rest_api";

Resource How to markdown
1. https://github.com/adam-p/markdown-here | (fork) https://github.com/PDVega/markdown-here
2. https://github.com/workshopper/how-to-markdown | (fork) https://github.com/PDVega/how-to-markdown 


routes | HTTP | Description
-------|------|------------
/api/signup | POST | Sign up with new user info
/api/signin | POST | Sign in while get an access token based on credentials
/api/users   | GET | Get all the users info (admin only)
/api/users/:id | GET | Get a single user info (admin and authenticated user)
/api/users | POST | Create a user (admin only)
/api/users/:id | DELETE | Delete a user (admin only)
/api/users/:id | PUT | Update a user with new info (admin and authenticated user)
