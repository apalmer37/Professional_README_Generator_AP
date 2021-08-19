function fileGenerator(answers){
    return `# ${answers.title}
    ## Description
    ${answers.description}

    ## Table of Contents:
    1. [Installation](install)
    2. [Usage](usage)
    3. [Licenses](license)
    4. [Contributors](contributors)
    5. [Tests](tests)
    6. Questions(github)


    ## Installation Instructions:
    ${answers.install}


    ## Usage:
    ${answers.usage}


    ## Licenses:
    ${answers.license}


    ## Contributors:
    ${answers.contributors}


    ## Tests:
    ${answers.tests}


    ## Questions? Check out my Github!
    [<a href="${answers.github}" target="${answers.github}">${answers.github}</a>]
    `
}

module.exports = fileGenerator;

// I ran npm i markdown, and it caused a ton of unintended changes