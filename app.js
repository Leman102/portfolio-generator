const inquirer = require('inquirer');

// const fs = require('fs');
// //add generatePage function
// const generatePage = require('./src/page-template.js');

// //const profileDataArgs = process.argv.slice(2, process.argv.length); 
// // const name = profileDataArgs[0];
// // const github = profileDataArgs[1];
// //const [name, github] = profileDataArgs;
// const pageHTML = generatePage(name, github);

// //addidng fs writeFile module to create html, needs 3 arg
// // file name, data(function), error handling
// fs.writeFile('index.html',pageHTML,err => {
//     if(err) throw err;
//     console.log('Portfolio complete! Check out index.html to see the output!');
// });
inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?'
    }
  ])
  .then(answers => console.log(answers));