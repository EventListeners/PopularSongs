
const { Client } = require('pg');

const PG_setup = {
    "host": "localhost",
    "user": "ivanhui",
    "db": "artists",
    "port": "5432",
  };
const conString = `postgres://${PG_setup.user}@${PG_setup.host}:${PG_setup.port}/${PG_setup.db}`
  

const client = new Client({
  connectionString: conString,
  })

client.connect();
console.log('working connect');

module.exports = client;
