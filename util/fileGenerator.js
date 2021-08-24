function fileGenerator(answers){
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
    [${answers.github}](https://github.com/${answers.github})
    
    `
}

module.exports = fileGenerator;

// need to figure out how to make github a link and table of contents

