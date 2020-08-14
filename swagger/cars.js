const cars = {
    "/cars": {
        "get": {
            tags: ['Cars'],
            description: "Returns cars",
            //operationId: 'getCars',
            /*security: [
                {
                    bearerAuth: []
                }
            ],*/
            responses: {
                "200": {          
                    description: "A list of cars.",
                    "content": {
                        "application/json": {
                            schema: {
                                type: "object",
                                cars: {
                                    type: 'array',
                                    items: {
                                        vin: {
                                            type: 'string',
                                            description: 'Vin'
                                        },
                                        make: {
                                            type: 'string',
                                            description: 'Make'
                                        },
                                        model: {
                                            type: 'string',
                                            description: 'Model'
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};

module.exports = cars;