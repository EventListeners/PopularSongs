const faker = require('faker');
const fs = require('fs');

console.log('HELLOO')

let counteri = 0;
let counterj = 0;
let counterk = 0;

for(var l = 0; l < 1000; l++) {

  let writeStream = fs.createWriteStream(`../fakeData/seedData/data${l}.json`);
  
  for (var i = 1; i <= 10000; i++) {
    
      let objA = {
        id: counteri,
        name: faker.lorem.word(),
        albums: [] 
      }
    
      for(var j = 0; j < 3; j++) {
        let objB = {
          id: counterj,
          name: faker.lorem.words(),
          img: (Math.random() * 999), 
          publish: Math.floor(Math.random() * (2018 - 1920 + 1)) + 1920,   // published between 2018 and 1920
          songs: []
        }
    
        for(var k = 0; k < 10; k++) {
          let objC = {
            id: counterk,
            name: faker.lorem.words(),
            streams: Math.floor(Math.random() * (250000000 - 50000000 + 1)) + 50000000,   // streams between 50mm and 250mm
            length: Math.floor(Math.random() * (300 - 210 + 1)) + 210,   // length between 5 min and 3.5 min
            popularity: Math.floor(Math.random() * 20) + 1,   // popularity scale between 1 and 20 - used to select most popular songs
            library: Math.random() >= 0.5   // whether song has been added to users library
          }
          counterk++;
          objB.songs.push(objC);
    
        }
        counterj++;
        objA.albums.push(objB);
    
      }
      counteri++;
      writeStream.write(JSON.stringify(objA));
    }
    console.log(`finished ${l+1}0,000`)
    writeStream.on('finish', () => {  
    console.log(`wrote all data to file`);
  });
  
  
  writeStream.end();  
}

