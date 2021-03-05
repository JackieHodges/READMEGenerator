// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require("./generateMarkdown.js");

// array of questions for user input
const questions = ["What is the title of this project?", "Enter a short description of the project.", "What is the installation needed for this project?", "How would someone try to use this application?", "What licesnse was used for this application?", "Did you have any contributors?", "What are the test instructions for this application?", "What is your github username for contact?", "What is your email for questions?"];

// function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("README Created")
    );
    
}

// function to initialize app
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
        choices: ["MIT", "Apache 2.0", "GNU GPL v3", "ISC", "Not Listed", "N/A"],
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
  .then((data) => {

    let badgeSearch = markdown.renderLicenseBadge(data.license);
    let markdownData = markdown.generateMarkdown(data);

    writeToFile("generatedREADME.md", markdownData);
    
    });


}

// Function call to initialize app
init();
