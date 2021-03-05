# READMEGenerator
README Generator


## Description

In order to create a high-quality README, I created a command-line application to dynamically generate based on the users answers to given prompts. This will allow for coders to devote more time to the program, rather than the README, while still being able to provide a professional README.

By implementing the [Inquirer package](https://www.npmjs.com/package/inquirer), I was able to display prompts in the command-line. The prompts include project title, description, installation instructions, usage information, contribution guidelines, and test instructions. The inputs are then added to the specified sections on the README and are linked through the Table of Contents. 

When the specific license is selected from the list of options, a badge for that license is added to the top of the README. A notice is also included in the Licesene section explaining what license the application is covered by.

Lastly, there are prompts for the user's GitHub username and email address. A link to the given GitHub profile is then included, and the email address is added with instructions on how to contact.


## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)


## Installation

To install, follow these steps:

* Pull the repository found here: [README Generator Repo](https://github.com/JackieHodges/READMEGenerator)
* Install dependencies by typing the following in the terminal: npm i
* Once the dependence has been installed, run the application by entering: node index.js  


## Usage

Below is a video of the typical user flow through of the application:

![video](gif/READMEgif.gif)


## Credits

The [Inquirer package](https://www.npmjs.com/package/inquirer) was implemented in this project. [Choose A License](https://choosealicense.com/) provided the license links and badges.

