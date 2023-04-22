// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
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
      message: 'Provide instructions and examples for use. Include screenshots as needed.',
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
      message: 'Include your badge, if any.',
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
];


// TODO: Create a function to write README file
const writeTofile = (readMetemplate) => {
    fs.writeFile('README.md', readMetemplate, (err) =>
        err ? console.error(err) : console.log('README.md generated!')
    );
};


// TODO: Create a function to initialize app

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
- [Credits](#credits)
- [License](#license)
- [Badges](#badges)
- [Features](#features)
- [Contributing](#contributing)
- [Tests](#tests)

## Installation
${answers.installation}

## Usage
${answers.usage}

## Credits
${answers.credits}

## License
${answers.license}

## Badges
${answers.badges}

## Features
${answers.features}

## Contributing
${answers.contributing}

## Tests
${answers.tests}

            `;

            writeTofile(readMetemplate);

        });
};

// Function call to initialize app
init();