var request = require('request');
var fs = require('fs');

let imageGetter = function(imageNumber) {
 const keywords = ['person', 'singer', 'artist', 'human', 'rapper', 'man', 'woman'];
 const randIndex = Math.floor(Math.random() * keywords.length);
 request
   .get(`https://loremflickr.com/240/240/${keywords[randIndex]}?random=${imageNumber}`)
   .on('error', function(err) {
     console.log(err);
   })
   .pipe(fs.createWriteStream(`../fakeData/images/${imageNumber}.jpg`));
};

for (let i = 900; i < 1000; i+=1) {
 imageGetter(i);
}
