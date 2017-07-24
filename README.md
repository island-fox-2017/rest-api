# INTRO REST API
Aplikasi ini merupakan pembelajaran tentang basic dari REST API.

# REST API
List of basic routes:

| Route          | HTTP   | Description                                                |
|----------------|:------:|-----------------------------------------------------------:|
| /api/signup    | POST   | Sign up with new user info                                 |
| /api/signin    | POST   | Sign in while get an access token based on credentials     |
| /api/users     | GET    | Get all the users (admin only)                             |
| /api/users/:id | GET    | Get a single user (admin and authenticated user)           |
| /api/users     | POST   | Create a user (admin only)                                 |
| /api/users/:id | DELETE | Delete a user (admin only)                                 |
| /api/users/:id | PUT    | Update a user with new info (admin and authenticated user) |

# USAGE
```
npm init
npm install --save sequelize-cli
npm install --save sequelize
sequelize init
npm install --save pg@6
npm install --save pg-hstore
npm install --save express
npm install --save body-parser
npm install --save jsonwebtoken
npm install --save dotenv
```
Access the website API via http://localhost:3000/api
