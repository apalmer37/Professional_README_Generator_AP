function fileGenerator(answers){
    return ` ${answers.title}
    ## Description
    ${answers.description}

    ## Table of Contents:
    1. [Installation]#(install)
    2. [Usage]'#(usage)'
    3. [Licenses](license)
    4. [Contributors](${answers.contributors})
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
    ./${answers.github}
    
    `
}

module.exports = fileGenerator;

// need to figure out how to make github a link and table of contents

