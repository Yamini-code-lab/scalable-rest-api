const swaggerJsDoc =
require("swagger-jsdoc");

const swaggerUi =
require("swagger-ui-express");

const options = {

    definition: {

        openapi: "3.0.0",

        info: {
            title:
                "Scalable REST API",

            version: "1.0.0"
        }
    },

    apis: ["./src/routes/v1/*.js"]
};

const swaggerSpec =
swaggerJsDoc(options);

module.exports = {
    swaggerUi,
    swaggerSpec
};