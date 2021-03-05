let licenseBadge;
let licenseLink;
let licenseSection;
//=function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {

  switch (license){
    case "MIT":
      licenseBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
      break;
    case "Apache 2.0":
      licenseBadge = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
      break;
    case "GNU GPL v3":
      licenseBadge = `[![License: GNU GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
      break;
    case "ISC":
      licenseBadge = `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`;
      break;
    default:
      licenseBadge = "";
  }

  renderLicenseLink(license);

}

// function that returns the license link
function renderLicenseLink(license) {

  switch (license){
    case "MIT":
      licenseLink = '[MIT](https://choosealicense.com/licenses/mit/#)';
      break;
    case "Apache 2.0":
      licenseLink = '[Apache 2.0](https://choosealicense.com/licenses/apache-2.0/)';
      break;
    case "GNU GPL v3":
      licenseLink = '[GNU GPL v3](https://choosealicense.com/licenses/gpl-3.0/)';
      break;
    case "ISC":
      licenseLink = '[ISC](https://choosealicense.com/licenses/isc/)';
      break;
    default:
      licenseLink = "";
  }

  renderLicenseSection(license);
}

// function that returns the license section of README
function renderLicenseSection(license) {

  switch (license){
    case "MIT":
      licenseSection = `This application is covered under the ${licenseLink} license.`;
      break;
    case "Apache 2.0":
      licenseSection = `This application is covered under the ${licenseLink} license.`;
      break;
    case "GNU GPL v3":
      licenseSection = `This application is covered under the ${licenseLink} license.`;
      break;
    case "ISC":
      licenseSection = `This application is covered under the ${licenseLink} license.`;
      break;
    default:
      licenseSection = "";
  }
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ${licenseBadge}

  
  ## Description
  
  ${data.description}
  
  
  ## Table of Contents
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#Contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  
  ## Installation
  
  ${data.installation}
  
  
  ## Usage
  
  ${data.usage}
  
  
  ## License
  
  ${licenseSection}
  
  
  ## Contributing
  
  ${data.contributors}
  
  
  ## Tests
  
  ${data.instructions}
  
  
  ## Questions
  You can find my GitHub profile [here](https://github.com/${data.github}). 
  
  If you have any questions, comments, or concerns, I can be reached at the following email address: ${data.email}.
`;
}

module.exports = {renderLicenseBadge, generateMarkdown};


