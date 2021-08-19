const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const fileGenerator = require('./util/fileGenerator');

// create writeFile function using promises instead of a callback function
const writeFileAsync = util.promisify(fs.writeFile);

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
        // what am I supposed to do for tests?
        type: "input",
        message: "Are there any tests, and how are they run?",
        name: "tests"
    },
])};

const init = () => {
    promptUser()
        .then((answers) => writeFileAsync('./README.md', fileGenerator(answers)))
        .then(() => console.log('Successfully wrote to README.md'))
        .catch((err) => console.error(err));
};

init();