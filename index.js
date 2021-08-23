const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const fileGenerator = require('./util/fileGenerator');

// create writeFile function using promises instead of a callback function
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
        // add licenses and --> 
        //WHEN I choose a license for my application from a list of options
        //THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under 
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
        // what am I supposed to do for tests?
        type: "input",
        message: "Are there any tests, and how are they run?",
        name: "tests"
    }, {
        // can't figure out how to make this a link
        type: "input",
        value: 'https://github.com/',
        message: "Enter Github Username",
        name: "github"
    },{
        // can't figure out how to make this a link
        type: "input",
        message: "Enter Email Address",
        name: "email"
    },
])};

const init = () => {
    promptUser()
        .then((answers) => writeFileAsync('README.md', fileGenerator({ ...answers })))
        .then(() => console.log('Successfully wrote to README.md'))
        .catch((err) => console.error(err));
};

init();