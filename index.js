// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// Array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a short description explaining the what, why, and how of your project.',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide instructions and examples for use.',
    },
    {
      type: 'input',
      name: 'screenshot',
      message: 'Do you want to add a screenshot? If yes, please provide the link to the screenshot:',
    },
    {
      type: 'input',
      name: 'video',
      message: 'Do you want to add a video recording of your application in action? If yes, please provide the link to video recording:',
    },
    {
      type: 'input',
      name: 'credits',
      message: 'List your collaborators, if any, with links to their GitHub profiles.',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license for your project:',
      choices: ['Apache 2.0', 'GNU GPL v3', 'ISC', 'MIT', 'n/a'],
    },
    {
      type: 'input',
      name: 'badges',
      message: 'Do you want to add a badge? If yes, please provide the link to the badge image:',
    },
    {
        type: 'input',
        name: 'features',
        message: 'If your project has a lot of features, list them here.',
    },
    {
      type: 'input',
      name: 'contribute',
      message: 'If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so.',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What are the test instructions for your project?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
    },
    {
      type: 'input',
      name: 'username',
      message: 'What is your Github user name?',
    },
];


// Function to write README file
const writeTofile = (readMetemplate) => {
    fs.writeFile('README.md', readMetemplate, (err) =>
        err ? console.error(err) : console.log('README.md generated!')
    );
};


// Function to initialize app

function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            const readMetemplate = `
# ${answers.title}

## Description

${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Screenshot](#screenshot)
- [Video recording](#video-recording)
- [Credits](#credits)
- [License](#license)
- [Badges](#badges)
- [Features](#features)
- [Contributing](#contributing)
- [Tests](#tests)
- [Email address](#email-address)
- [Github username](#github-username)

## Installation
${answers.installation}

## Usage
${answers.usage}

## Screenshot
![screenshot](${answers.screenshot})

## Video recording
You can visit this link to view the application in action: ${answers.video}

## Credits
${answers.credits}

## License
${answers.license}

## Badges
![badge image](${answers.badges})

## Features
${answers.features}

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Email address
${answers.email}

## Github username
${answers.username}

            `;

            writeTofile(readMetemplate);

        });
};


// Function call to initialize app
init();