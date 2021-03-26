const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require('./src/page-template');

const promptProject = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the name of your Project? (Required)',
      validate: projectTitleInput => {
        if (projectTitleInput) {
          return true
        } else {
          console.log("Please Enter Your Project Name!");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please Write description of your Project',
      validate: descriptionInput => {
        if (descriptionInput) {
          return true;
        } else {
          console.log('We need your project description!')
        }
      }
    },
    {
      type: 'checkbox',
      name: 'technology',
      message: 'which of the following would did you use to build your porjecy (Check all that apply)',
      choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node'],
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the steps required to install your project?',
      validate: installtionInput => {
        if (installtionInput) {
          return true;
        } else {
          console.log('We need your project installtion!')
        }
      }
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide instructions and examples for use.',
      validate: usageInput => {
        if (usageInput) {
          return true;
        } else {
          console.log('Please provide valid usage information')
        }
      }
    },
    {
      type: 'input',
      name: 'credits',
      message: 'Please list your collaborators',
      validate: creditInput => {
        if (creditInput) {
          return true;
        } else {
          console.log('if there is on one to add, please add yourself')
        }
      }
    },
    {
      type: "list",
      name: "license",
      message: "Chose the appropriate license for this project: ",
      choices: ["MIT", "Academic", "GNU", "ISC", "Apache", "Mozilla", "Open"]
    },
    {
      type: 'confirm',
      name: 'confirmFeature',
      message: 'Would you like to feature this project? (Optional)',
      default: false
    },
    {
      type: 'input',
      name: 'feature',
      message: 'Please provide your features',
      when: ({ confirmFeature }) => confirmFeature
    },
    {
      type: "input",
      name: "tests",
      message: "If there is any, Please provide examples on how to run them."
    },
  ])
};

promptProject().then(projectData => {
  generateReadme = generatePage(projectData);

  fs.writeFile('./README.md', generateReadme, err => {
    if (err) throw new Error(err);

    console.log("Your README has been Created");
  });
});

