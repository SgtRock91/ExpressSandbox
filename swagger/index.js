const cars = require('./cars');


const swagger = {
    "openapi": "3.0.1",
    "info": {
      "title": "Sandbox Swagger",
      "description": "Sandbox Swagger for testing",
      "version": "1.0.0"
    },
    "servers": [
      {
        "url": "http://localhost:3001/"
      }
    ],
    "tags": [
      {
        "name": "cars",
        "description": "Cars info ere!",
      },
    ],
    "paths": {
      "/cars": {
        "get": {
          "tags": [
            "cars"
          ],
          "summary": "Get the list of cars",
          "operationId": "getCars",
          "responses": {
            "200": {
              "description": "Cars list",
              "content": {}
            }
          },
        }
      },
    }
  }

module.exports = swagger;