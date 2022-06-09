const {Client} = require('pg')

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "Gopika@2000",
    database: "postgres"
})

module.exports = client