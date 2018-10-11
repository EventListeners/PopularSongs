const faker = require('faker');
const fs = require('fs');

console.log('HELLOO')

// for (var j = 5; j < 10; j++) {
//     let writeStream = fs.createWriteStream(`../fakeData/seedDataCSV/Artist/Artist${j}.csv`);
//     writeStream.write('id,artist_name\n')
    
//     for (var i = 0; i < 1000000; i++) {
//         let str = ((i+(j*1000000)) + ',' + faker.name.firstName() + ' ' + faker.name.lastName() + '\n') 
//         writeStream.write(str);
//     }
//     writeStream.end();  
//     console.log(`finished ${j+1},000,000`)
// }


for (var j = 5; j < 10; j++ ) {
    let writeStream = fs.createWriteStream(`../fakeData/seedDataCSV/Album/Album${j}.csv`)
    writeStream.write('id,album_name,album_pic,published,artist\n')
    for(var i = 0; i < 3000000; i++) {
        let str = ((i+(j*3000000)) + ',' + faker.lorem.words() + ',' + Math.floor (Math.random()*999) + 
        ',' + ((Math.floor(Math.random() * (2018 - 1920 + 1))) + 1920) + ',' + (Math.floor((i+(j*3000000))/3)) + '\n');
        writeStream.write(str)
    }
    writeStream.end()
    console.log(`finished ${j*3+3},000,000`)   
}

// for (var j = 19; j < 20; j++ ) {
//     let writeStream = fs.createWriteStream(`../fakeData/seedDataCSV/Songs/Song${j}.csv`)
//     writeStream.write('song_name,stream,length,popularity,library,album\n')
//     for(var i = 0; i < 15000000; i++) {
//         let str = (faker.lorem.words() + ',' + (Math.floor(Math.random() * (250000000 - 50000000 + 1)) + 50000000) + 
//         ',' + (Math.floor(Math.random() * (300 - 210 + 1)) + 210) + ',' + (Math.floor(Math.random() * 20) + 1) + ',' +
//         (Math.random() >= 0.5) + ',' +(Math.floor((i+(j*15000000))/10)) + '\n');
//         writeStream.write(str)
//     }
//     writeStream.end()
//     console.log(`finished ${j*15+15},000,000`)   
// }
