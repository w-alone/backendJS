'use strict';
const fs = require('fs');
fs.readFile('.\\filesystem\\target.txt', (err, data) => {
if (err) {
throw err;
}
console.log(data.toString());
});