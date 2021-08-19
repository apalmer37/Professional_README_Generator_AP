function fileGenerator(answers){
    return `
    

    
    ${answers.title}

    ${answers.description}

    ${answers.install}

    ${answers.usage}

    ${answers.license}

    ${answers.contributors}

    ${answers.tests}
    `
}

module.exports = fileGenerator;