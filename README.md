# READMEGenerator
README Generator


## Description

In order to create a high-quality README, I created a command-line application to dynamically generate based on the users answers to given prompts. This will allow for coders to devote more time to the program while still being able to provide a professional README.

By implementing the [Inquirer package](https://www.npmjs.com/package/inquirer), I was able to display prompts in the command-line. The prompts include project title, description, installation instructions, usage information, contribution guidelines, and test instructions. The inputs are then added to their specified sections on the README and are linked through the Table of Contents. 

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

![screenshot 1](assets/images/screenshot1.png)

![screenshot 2](assets/images/screenshot2.png)

![screenshot 3](assets/images/screenshot3.png)


## Credits

I used the OpenWeather API to fetch current and future weather data. It can be found here: [OpenWeather API](https://openweathermap.org/api). I also used the documentation to ensure the proper weather icons were displayed.

OpenWeather API returned the day/time in a UNIX timestamp. I used resources located at [Coder Rocket Fuel](https://coderrocketfuel.com/article/convert-a-unix-timestamp-to-a-date-in-vanilla-javascript) and [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) to ensure the date was formatted as requested.

