const inquirer = require('inquirer');
const fs = require('fs');
const gm = require('./utils/generateMarkdown');
const fileName = "README_OUTPUT.md";
const licenseChoices = [{name:"MIT", value:0}, 
                        {name:"GNU General Public License v3.0", value: 1}, 
                        {name:"Unlicense", value:2},
                        {name:"none", value:3}];

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
          type: 'list', 
          message: 'What kind of license should your project have?',
          name: 'license',
          choices: licenseChoices
        },
        {
          type: 'input',
          message: `What command should be run to install dependencies?`,
          name: 'dependencies',
        },
        {
          type: 'input',
          message: 'What command should be run to run tests?',
          name: 'tests',
        },
        {
          type: 'input',
          message: 'What does the user need to know about using the repo?',
          name: 'repo',
        },
        {
          type: 'input',
          message: `What does the user need to know about contributing to the repo?`,
          name: 'contribute',
        }
];

// function to write README file
function writeToFile(fileName, data) {
    // console.log(fileName);
    // console.log(generateMarkdown(data));
    fs.writeFile(fileName, gm(data), (err) =>
    err ? console.log(err) : console.log('Success! README created!'));
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then((answers) => writeToFile(fileName, answers))
    .catch(error => {
        if(error.isTtyError){ console.log("oops! soemthing isn't right")}
        else {console.log("done!")}
    })
}

// function call to initialize program
init();
