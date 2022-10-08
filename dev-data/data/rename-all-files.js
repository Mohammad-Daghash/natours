/* eslint-disable array-callback-return */
/* eslint-disable no-plusplus */
const fs = require('fs');
const surahs = require('./surahs');

const capitalized = str => str.charAt(0).toUpperCase() + str.slice(1);

const filesDir = './../../../../../Holy Quran/Maher Al-Muaiqly/';
const files = fs.readdirSync(filesDir);
let x = 1;

files.map(file => {
    const format = `${x++} - ${capitalized(
        surahs[+file.substring(0, 3) - 1]
    )}.mp3`;
    fs.rename(`${filesDir.concat(file)}`, `${filesDir.concat(format)}`, err => {
        if (err) console.log(err);
    });
});
console.log('Renaming is finished.');
