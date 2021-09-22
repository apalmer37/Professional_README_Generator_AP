const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
// const fileGenerator = require('./util/fileGenerator');

// create writeFile function using promises 
const writeFileAsync = util.promisify(fs.writeFile);

// create user prompts
const promptUser = () => {
  return inquirer.prompt([
    {
        type: "input",
        message: "What is your project's title?",
        name: "title"
    }, {
        type: "input",
        message: "Give a brief description of your project.",
        name: "description"
    }, {
        type: "input",
        message: "What is the installation process for your project?",
        name: "install"
    }, {
        type: "input",
        message: "What is your usage?",
        name: "usage"
    }, {
        type: "list",
        message: "Select your license for this project.",
        name: "license",
        choices: [
            "UoR",
            "MIT",
            "Other"
        ]
    }, {
        type: "input",
        message: "Who are the contributors?",
        name: "contributors"
    }, {
        type: "input",
        message: "Are there any tests, and how are they run?",
        name: "tests"
    }, {
        type: "input",
        message: "Enter Github Username",
        name: "github"
    },{
        type: "input",
        message: "Enter Email Address",
        name: "email"
    },
])};

function readmeGenerator(answers){
    return ` ${answers.title}
    
    ## Description
    ${answers.description}

    ## Table of Contents:
    1. Installation
    2. Usage
    3. Licenses
    4. Contributors
    5. Tests
    6. Questions


    1. Installation Instructions:
    ${answers.install}


    2. Usage:
    ${answers.usage}


    3. Licenses:
    ${answers.license}


    4. Contributors:
    ${answers.contributors}


    5. Tests:
    ${answers.tests}


    6. Questions? Contact me by email! 
    ${answers.email}


    7. My Github:
    https://github.com/${answers.github}
    
    `;
}

const init = () => {
    promptUser()
        .then((answers) => writeFileAsync('README.md', readmeGenerator({ ...answers })))
        .then(() => console.log('Successfully wrote to README.md'))
        .catch((err) => console.error(err));
};

init();