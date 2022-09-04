// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your project?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Explain they use of this project?',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'How can users contribute to your project?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Go the extra mile and write tests for your application.',
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'userEmail',
        message: 'What is your email address?',
    },


];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), function (err) {
        if (err) {
            return console.log(err);
        }
    });
}

// TODO: Create a function to initialize app
function init() {

inquirer.prompt(questions).then((data) => {
    console.log(JSON.stringify(data, null, " "));
    writeToFile('README.md', data);
});
}



// Function call to initialize app
init();
