var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');

const cars = [{
    vin: '111',
    make: 'GMC',
    model: 'Sierra'
  }, {
    vin: '222',
    make: 'GMC',
    model: 'Canyon'
  }, {
    vin: '333',
    make: 'Acura',
    model: 'RDX'
  }];

const schema = buildSchema(`
  type Car {
    vin: String
    make: String
    model: String
  }

  type Query {
    getCar: Car
    getCars: [Car]
  }
`);

// The root provides the top-level API endpoints
const root = {
    getCar: () => {
        return cars[2];
    },
    getCars: () => {
        return cars;
    }
};

const setup = (app) => {
    app.use('/carsgraphql', graphqlHTTP({
        schema: schema,
        rootValue: root,
        graphiql: true,
    }));
}

module.exports = { setup } ;
