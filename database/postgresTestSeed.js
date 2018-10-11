const fs = require('fs');
const copyFrom = require('pg-copy-streams').from;
const { Client } = require('pg');

const PG_setup = {
    "host": "ec2-13-56-253-195.us-west-1.compute.amazonaws.com",
    "user": "super_user",
    "db": "artists",
    "port": "5432",
  };
const conString = `postgres://${PG_setup.user}@${PG_setup.host}:${PG_setup.port}/${PG_setup.db}`
  


const copyIntoTable = (tableName, cols, ind) => {
    const client = new Client({
        connectionString: conString,
      })
      client.connect();
    console.log('working connect')
  
    client.query(`COPY ${tableName} ${cols} FROM '/home/ec2-user/fakeData/seedDataCSV/Artist/Artist${ind}.csv' CSV HEADER`);

  };


const copyManyCSV = async (tableName, colName) => {
  for (let i = 1; i < 5; i++) {
    await copyIntoTable(tableName, colName, i);
  }
};

 copyManyCSV('artists', '(ID,artist_name)');
// copyManyCSV('albums', '(id,album_name,album_pic,published,artist)');
//copyManyCSV('songs', '(song_name,stream,length,popularity,library,album)', false);
