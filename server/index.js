require('newrelic');
const express = require('express');
const bodyParser = require('body-parser');
// const clients = require('../database/index');
const path = require('path');
const cors = require('cors');
const cluster = require('cluster');
const os = require('os');
// const cache = require('../cashe');
const { Pool } = require('pg');


if (cluster.isMaster) {
  const cpuCount = os.cpus().length
  for (let i = 0; i < cpuCount; i++) {
    cluster.fork()
  }
} else {
  
  const app = express();
  
  // // parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: false }));
  // // parse application/json
  app.use( bodyParser.json() );
  app.use(cors());
  app.use(express.static(path.join(__dirname, '../public/')));

  const pool = new Pool({
    host: "13.56.79.37", 
    user: "super_user",
    password: "password",
    database: "artists",
    port: "5432",
  })

  
  pool.on('error', (err) => {
    console.error('An idle client has experienced an error', err.stack)
  })
  

  
  app.get('/artist/:id', function (req, res) {
    let artistID = req.params.id;
    
    // cache.get(artistID, (err, info) => {
    //   if(info === null) {
        pool.connect()
        .then(client => {
          return client.query(`SELECT * FROM artists, albums, songs WHERE
          artists.id = albums.artist AND songs.album = albums.id AND artists.id = ${artistID};`)
          .then(artist => {
            client.release()
            // cache.set(artistID, JSON.stringify(artist.rows))
            res.send(artist.rows)
          })
          .catch(e => {
            client.release()
            console.log('ERROR', e)
          })
        })
      })
      // else {
  //       res.send(JSON.parse(info));
  //     }
  //   })
  //     // .catch(err => console.log(err));
  // });
  
  
  // // expect to receive {artistID, albumID, songID, added -> bool either 1 or 0}
  // app.post('/artist/update', function (req, res) {
  //   let update = {};
  //   var objProp = `albums.${req.body.albumID}.songs.${req.body.songID}.library`;
  //   update[objProp] = !!parseInt(req.body.added,10);
  
  //   Artists.findOneAndUpdate({id: req.body.artistID}, {$set:update})
  //   // TO DO: get current boolean value from db and send back along with mssg
  //     .then(() => res.json({message: 'success', added: !!parseInt(req.body.added,10)}))
  //     .catch(() => res.status(400).json({message: 'bad request'}));   
  // });
  
  
  // app.delete('/artist/:id/delete', function (req, res) {
  //   Artist.deleteOne({name: artistName}, function(err) {
  //     console.log(error, "error in deleting DB data")
  //   });
  // })
  
  
  const PORT = 8888;
  
  app.listen(PORT, function() {
    console.log(`listening on port ${PORT}!`);
  });

  
}   

cluster.on('exit', (worker) => {
  console.log(`mayday! mayday! worker ${worker.id} is no more!`)
  cluster.fork()
})
