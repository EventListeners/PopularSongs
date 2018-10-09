const fs = require('fs');
const copyFrom = require('pg-copy-streams').from;
const { Client } = require('pg');

const PG_setup = {
    "host": "localhost",
    "user": "ivanhui",
    "db": "artists",
    "port": "5432",
  };
const conString = `postgres://${PG_setup.user}@${PG_setup.host}:${PG_setup.port}/${PG_setup.db}`
  


const copyIntoTable = (tableName, cols, ind) => new Promise((resolve, reject) => {
    const client = new Client({
        connectionString: conString,
      })
      client.connect();
    console.log('working connect')
  
    var stream = client.query(copyFrom(`COPY ${tableName} ${cols} FROM STDIN CSV HEADER`));
    var fileStream = fs.createReadStream(`../fakeData/seedDataCSV/Songs/Song${ind}.csv`);
  
    fileStream.on('error', (error) =>{
      reject(`Error in reading file: ${error}`);
    });
    stream.on('error', (error) => {
      reject(`Error in copy command: ${error}`);
    });
    stream.on('end', () => {
      console.log(`Completed loading data into ${tableName}`);
      client.end(resolve);
    });
    fileStream.pipe(stream);
  });


const copyManyCSV = async (tableName, colName) => {
  for (let i = 10; i < 20; i++) {
    await copyIntoTable(tableName, colName, i);
  }
};

// copyManyCSV('artists', '(ID,artist_name)');
// copyManyCSV('albums', '(id,album_name,album_pic,published,artist)');
copyManyCSV('songs', '(song_name,stream,length,popularity,library,album)', false);
