const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    password: 'admin',
    host: 'locatlhost',
    port: 5432,
    database: ""
})

module.exports = pool