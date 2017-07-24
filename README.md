**REST API First App**

*Learn how to create APP with RESTful method  using get, post, put, delete.*

*Technology : Express JS, Sequelize, POSTMAN, JWT, Bcrypt, dotenv*

List of basic routes :
----------------------
**Route**     | **HTTP**    |   **Description**
---------- | ------- | -------------
/signup  |  POST  |  Sign up with new user info
/signin  | POST | Sign in while get an access token basen on credentials
/users  | GET  | Get all the users info (admin only)
/users/:id  | GET  | Get a single user info (admin and authenticated user)
/users  | POST  | Create a user (admin only)
/users/:id  | DELETE  | Delete a user (admin only)
/users/:id  | PUT | Update a user with new info (admin and authenticated user)

Usage:
--------- 
- npm install
- nodemon app.js
- rename .env-template to .env and change with your port and secret key 