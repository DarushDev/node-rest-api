# node-rest-api
A RESTful API using Node, Express 4 and its Router, and Mongoose to interact with a MongoDB instance. 

Before you begin you need to make sure you have a mongoDB database hosted somewhere online. In my case I used www.mlab.com to host my database for free.

**Setting up:**

1. Once you have created your database you need to create a **config.json** file in the root of the project with the following format:
```javascript
{
    "dbUrl" : "your-mongodb-database-url"
}
```
   or in **server.js** file you could simply replace **```config.dbUrl```** with your mongodb database url.

2. Run **_nmp start_** command to start the server.
3. Use **Postman** chrome extension to perform the CRUD operations such as GET, POST, PUT, DELETE.
