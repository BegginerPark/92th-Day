const testFolder = './data';
const fs = require('fs');

// fs.readdir(testFolder, (err, files) => {
//     files.forEach(fiole => {
//         console.log(file);
//     });
// });

fs.readdir(testFolder, function(error, filelist) {
    console.log(filelist);
});