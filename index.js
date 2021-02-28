// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = ["What is the title of this project?", "Enter a short description of the project.", "What is the installation needed for this project?", "How would someone try to use this application?", "What licesnse was used for this application?", "Did you have any contributors?", "What are the test instructions for this application?", "What is your github username for contact?", "What is your email for questions?"];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {

inquirer
  .prompt([
    {
        type: 'input',
        message: questions[0],
        name: 'title',
    },
    {
        type: 'input',
        message: questions[1],
        name: 'description',
    },
    {
        type: 'input',
        message: questions[2],
        name: 'installation',
    },
    {
        type: 'input',
        message: questions[3],
        name: 'usage',
    },
    {
        type: 'list',
        choices: ["test 1", "test 2", "test 3", "test 4"],
        message: questions[4],
        name: 'license',
    },
    {
        type: 'input',
        message: questions[5],
        name: 'contributors',
    },
    {
        type: 'input',
        message: questions[6],
        name: 'instructions',
    },
    {
        type: 'input',
        message: questions[7],
        name: 'github',
    },
    {
        type: 'input',
        message: questions[8],
        name: 'email',
    },
  ])
  .then((response) =>
    // response.confirm === response.password
    //   ? 
      console.log('Success!')
    //   : console.log('You forgot your password already?!')
  );
}

// Function call to initialize app
init();
