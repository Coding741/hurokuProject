const { Pool } = require('pg');
const config = require("config");

const user=config.get("user");
const host=config.get("host");
const database=config.get("database");
const password=config.get("password")
const dbport=config.get("dbport");

console.log(user,host,database,password,dbport)
const pool = new Pool({
    user:user,
    host:host,
    database:database,
    password:password,
    port:dbport
})

// pool.query('SELECT NOW()', (err, res) => {
//     console.log(err, res)
//     pool.end()
//   })
exports.pool = pool;