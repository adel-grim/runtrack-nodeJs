const fs = require('fs');
const directoryPath = 'C:\\Users\\adelp\\Documents\\laplateforme\\runtrack-node\\jour01';

fs.readdir(directoryPath, (_, files) => {
    files.forEach((file) => {
        console.log(file);
    });
});