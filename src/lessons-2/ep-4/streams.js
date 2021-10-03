const fs = require('fs');


const readStream = fs.createReadStream('./stories/BeautyAndTheBeast.txt', { encoding: 'utf8'});
const writeStream = fs.createWriteStream('./stories/myStory.txt');

readStream.on('data', (chunk) => {
    console.log('-------- NEW CHUNK --------');
    //console.log(chunk.toString());
    // we dont have to use .toString() if set encoding for readStream
    console.log(chunk);

    writeStream.write('\nNEW CHUNK\n');
    writeStream.write(chunk);
    writeStream.write('\n');
});

// piping, read and write file
readStream.pipe(writeStream);

