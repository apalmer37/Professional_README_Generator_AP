// TODO: Include packages needed for this application
const fileGenerator = require("./util/fileGenerator");
const fs = require("fs");
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
let questions = [
    {
        type: "input",
        message: "What is your title?",
        name: "title"
    }, {
        type: "input",
        message: "Give a brief description.",
        name: "description"
    }, {
        type: "input",
        message: "What is the installation process?",
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
    }
];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();