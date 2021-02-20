// Importing inquirer to use prompts, fs to generate and modify file, and modules including our functions
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// Questions to get the data to generate the file
const questions = require('./utils/questions')


// TODO: Create a function to write README file

function promptUser() {
    inquirer
        .prompt(questions)
        .then(answers => {
            console.log(answers);
        })
        .catch(err => console.error(err));
}

function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() {
    console.log('Welcome to the Read-Me-Generator!');
    promptUser();
}

// Function call to initialize app
init();
