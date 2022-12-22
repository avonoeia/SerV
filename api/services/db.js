const mysql = require('mysql2/promise')
const config = require('../config')

async function query(sql, params) {
    const connection = await mysql.createConnection(config.db)
    if (connection) {
        console.log("Successfully connected to db.")
    }
    
    const [results, ] = await connection.execute(sql, params)

    connection.end()
    console.log("Connection closed.")
    
    return results
}

module.exports = { query }