const fs = require('fs');

/********************************/
// reading files as async
/********************************/
fs.readFile('./docs/sample.txt', (err, data) => {
    if(err) {
        console.log(err);
    }
    console.log(data.toString());
});
console.log('last line');

/********************************/
// writing files as async. 
/********************************/
// this func create file if file does not exist.
fs.writeFile('./docs/sampleWritten.txt', 'hello you!', () => {
    console.log('file is written');
});

/********************************/
// directories
/********************************/
// if directory doesnt exist
if(!fs.existsSync('./assets')) {
    // make directory
    fs.mkdir('./assets', (err) => {
        if(err) {
            console.log(err);
        }
        console.log('folder created');
    });
} else {
    // remove directory if directory exist
    fs.rmdir('./assets', (err) => {
        if(err) {
            console.log(err);
        }
        console.log('folder deleted');
    });
}

/********************************/
// deleting files
/********************************/
// delete file if file exist 
if(fs.existsSync('./docs/deleteme.txt')) {
    // delete file
    fs.unlink('./docs/deleteme.txt', (err) => {
        if(err) {
            console.log(err);
        }
        console.log('file created');
    });
} else {
    // create file if file doesnt exist
    fs.writeFile('./docs/deleteme.txt', 'delete this file', () => {
        console.log('file is written');
    });
}