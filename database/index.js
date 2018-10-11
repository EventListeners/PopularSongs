
const { Client } = require('pg');

const PG_setup = {
    "host": "localhost", //13.56.79.37 13.56.79.37
    "password": "password", //
    "user": "ivanhui", //super_user
    "db": "artists",
    "port": "5432",
  };
const conString = `postgres://${PG_setup.user}@${PG_setup.host}:${PG_setup.port}/${PG_setup.db}`
  

const client = new Client({
  connectionString: conString,
  })

client.connect((err) => {
  console.log('something')
  if (err) {
    console.error('connection error', err.stack)
  } else {
    console.log('connected')
  }
})

module.exports = client;
