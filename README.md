# rest-api

## Simple RESTFUL App
Demo app with basic REST API.

#### List of user routes:

| Route                          | HTTP          | Description  |
| ------------------------------ |:-------------:| ------------:|
| ```/api/signup```   | POST    | Sign up with new user info |
| ```/api/signin```   | POST    | Sign in while get an access token based on credentials |
| ```/api/users```   | GET         | Get all the users info(admin only) |
| ```/api/users/:id``` | GET       | Get a single user info(admin and/or authenticated user)|
| ```/api/users```   | POST        | Create a user (admin only) |
| ```/api/users/:id``` | DELETE    | Delete a user (admin only) |
| ```/api/users/:id```  | PUT      | Update a user with new info (admin and/or authenticated user) |

#### Usage:

With only npm:
```
npm init
npm install express-generator --save
npm install sequelize sequelize-clie --save
npm install
```

Access the website via ```http://localhost:3000``` or API via ```http://localhost:3000/api```
