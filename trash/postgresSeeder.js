const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres', 'postgres', 'abc123', {
    host: 'localhost',
    port: 3003,
    dialect:'postgres',
    operatorsAliases: false,
  
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
  
  });

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

//defining schemas

const Artist = sequelize.define('artist', {
  id: {
    type: Sequelize.INTEGER
  },
  name: {
    type: Sequelize.STRING
  },
});

const Album = sequelize.define('album', {
  albumID: {
    type: Sequelize.INTEGER
  },
  name: {
    type: Sequelize.STRING
  },
  publish: {
    type: Sequelize.INTEGER
  },
  artistID: {
    type: Sequelize.INTEGER
  }
});

const Song = sequelize.define('song', {
  name: {
    type: Sequelize.STRING
  },
  streams: {
    type: Sequelize.INTEGER
  },
  length: {
    type: Sequelize.INTEGER
  },
  popularity: {
    type: Sequelize.INTEGER
  },
  library: {
    type: Sequelize.BOOLEAN
  },
  AlbumID: {
    type: Sequelize.INTEGER
  }
}); 


// force: true will drop the table if it already exists
User.sync({force: true}).then(() => {
// Table created
return User.create({
    firstName: 'John',
    lastName: 'Hancock',
});
});