# INTRO REST API
Aplikasi ini merupakan pembelajaran tentang basic dari REST API.

# REST API
List of basic routes:

| Route          | HTTP   | Description                          |
|----------------|:------:|-------------------------------------:|
| /api/users     | GET    | Get all the users                    |
| /api/users/:id | GET    | Get a single user                    |
| /api/users     | POST   | Create a user                        |
| /api/users/:id | DELETE | Delete a user                        |
| /api/users/:id | PUT    | Update a user with new info          |

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
```
Access the website API via http://localhost:3000/api
