# INTRO REST API
Aplikasi ini merupakan pembelajaran tentang basic dari REST API.

# REST API
List of basic routes:

| Route          | HTTP   | Description                          |
|----------------|:------:|-------------------------------------:|
| /api/users     | GET    | Get all the users                    |
| /api/users/:id | Get    | Get a single user                    |
| /api/users     | POST   | Create a user                        |
| /api/users/:id | DELETE | Delete a user                        |
| /api/users/:id | PUT    | Update a user with new info          |
| /api/users/:id | PATCH  | Update a user with specific new info |

# USAGE
npm init
npm install --save sequelize-cli
npm install --save sequelize
sequelize init
npm install --save pg@6
npm install --save pg-hstore
npm install --save express

Access the website via http://localhost:3000 or API via httP://localhost:3000?api
