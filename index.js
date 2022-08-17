// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown');
const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
function questions() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is your application title?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Type a description of your application.'
        },
        {
            type: 'input',
            name: 'tableContents',
            message: 'What are the table of contents?'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the steps needed to install your application?'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What are the steps to use your apllication?'
        },
        {
            type: 'list',
            name: 'license',
            message: 'Select license for your application: ',
            choices: [
                {
                    name: 'Apache License 2.0',
                    value: 'Apache'
                },
                {
                    name: 'MIT License',
                    value: 'MIT'
                },
                {
                    name: 'GNU GPLv3',
                    value: 'GPL',
                }
            ]
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Please enter your applications contributors.'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Add in any test instructions needed for the user.'
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your github profile username?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?'
        },

    ])
}


// TODO: Create a function to initialize app
async function init() {
    try {
        const data = await questions();
        const newMarkDown = generateMarkdown(data);

        await writeFileAsync('README.md', newMarkDown, 'utf-8');
        console.log('Open your new README.md document.');
    }
    catch(error) {
        console.log(error);
    }
}

// Function call to initialize app
init();
