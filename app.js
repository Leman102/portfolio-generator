const fs = require('fs');
//add generatePage function
const generatePage = require('./src/page-template.js');

const profileDataArgs = process.argv.slice(2, process.argv.length); 
// const name = profileDataArgs[0];
// const github = profileDataArgs[1];
const [name, github] = profileDataArgs;

//addidng fs writeFile module to create html, needs 3 arg
// file name, data(function), error handling
fs.writeFile('index.html',generatePage(name,github),err => {
    if(err) throw err;
    console.log('Portfolio complete! Check out index.html to see the output!');
});