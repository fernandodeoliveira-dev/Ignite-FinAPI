const { response, request } = require('express');
const express = require('express');
const { v4: uuidv4 } = require("uuid");

const app = express();

const customers = [];

app.use(express.json());

/**
 * cpf - string
 * name - string
 * id - uuid
 * statement []
 */
app.post("/account", (request, response) => {
    const { cpf, name } = request.body;
    const id = uuidv4();

    customers.push({
        cpf,
        name,
        id,
        statement: []
    });

    return response.status(201).send();
})

app.listen(3333);