const inquirer = require('inquirer');
const fs = require('fs');
const fileName = "README-1.md"


// array of questions for user
const questions = [
        {
          type: 'input',
          message: 'What is your GitHub username?',
          name: 'username',
        },
        {
          type: 'input',
          message: 'What is your email address?',
          name: 'email',
        },
        {
          type: 'input',
          message: `What is your project's name?`,
          name: 'pname',
        },
        {
        type: 'input',
        message: 'Please write a short description of your project.',
        name: 'pdescription',
        },
        {
        type: 'input', // is this a checkbox orother type?
        message: 'What kind of license should your project have?',
        name: 'license',
        }
        // ,
        // {
        // type: 'input',
        // message: `What command should be run to install dependencies?`,
        // name: 'dependencies',
        // },
        // {
        // type: 'input',
        // message: 'What command should be run to run tests?',
        // name: 'tests',
        // },
        // {
        // type: 'input',
        // message: 'What does the user need to know about using the repo?',
        // name: 'repo',
        // },
        // {
        // type: 'input',
        // message: `What does the user need to know about contributing to the repo?`,
        // name: 'contribute',
        // }
];

// function to write README file
function writeToFile(fileName, data) {
    console.log(fileName);
    console.log(data);
}

// function to initialize program
function init() {
    console.log(`gonna be fun!`);
    inquirer.prompt(questions)
    .then((answers) => writeToFile(fileName, answers))
    .catch(error => {
        if(error.isTtyError){ console.log("oops! soemthing isn't right")}
        else {console.log("done!")}
    })
}

// function call to initialize program
init();
