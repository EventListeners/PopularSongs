const faker = require('faker');
const fs = require('fs');

const cassSeed = (ind) => {
    let writeStream = fs.createWriteStream(`../fakeData/seedDataCSVcass/Artist${ind}.csv`);
    writeStream.write('song_id,artist_id,artist_name,album_id,album_name,img,publish,song_name,streams,length,popularity,library\n')

    for (var i = 0; i < 15000000; i++) {
        let str = ((i+(ind*15000000)) + ',' + Math.floor((i+(ind*15000000))/30) + ',' + faker.name.firstName() + ' ' + faker.name.lastName() + 
        ',' + Math.floor((i+(ind*15000000))/10) + ',' + faker.lorem.words() + ',' + Math.floor (Math.random()*999) + 
        ',' + ((Math.floor(Math.random() * (2018 - 1920 + 1))) + 1920) + 
        ',' + faker.lorem.words() + ',' + (Math.floor(Math.random() * (250000000 - 50000000 + 1)) + 50000000) + 
        ',' + (Math.floor(Math.random() * (300 - 210 + 1)) + 210) + ',' + (Math.floor(Math.random() * 20) + 1) + 
        ',' + (Math.random() >= 0.5) + '\n')
        
        writeStream.write(str);
    }
    writeStream.end()
    console.log(`finished ${(ind*15)+15},000,000`)
};


cassSeed(3);

//0,1 seeded 