function generatePage(answers) {
  return `
  # ${answers.title}

  ![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)<br />
  ## Description 

  ${answers.description}

  ## Table of Contents
  
  - [Installation](#installation)
  - [Technology](#technology)
  - [Usage](#usage)
  - [Credit](#credit)
  - [License](#license)
  - [Feature](#feature)
  - [Test](#test)
  - [Questions](#questions)

  ## Installation

  ${answers.installation}

  ## Technology
  ${answers.technology.join(', ')}

  ## Usage 

  ${answers.usage}

  ## Credits

  ${answers.credits}


  ## License

  this project is cover under ${answers.license} License (https://choosealicense.com/licenses/${answers.license}/)

  ## Feature 

  ${answers.feature}

  ## Test 

  ${answers.tests}

  ## Questions
  
  If you have any Questions, please do not hesitate to contact me one: 

  -Github: [${answers.github}](https://github.com/${answers.github})
  
  -Email: ${answers.email}
  `;

}

module.exports = generatePage;