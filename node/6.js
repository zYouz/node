'test'
const fs = require('fs')
const file = process.argv[2]

fs.readFile(file, 'utf8', function(err, contents) {
    if (err) {
        return console.log(err)
    } else {
        const lines = contents.split('\n');
        const stdout = lines.length - 1;
        console.log(stdout)
    }

})