function generatePage(answers) {
  return `
  # ${answers.title}

  ## Description 

  ${answers.description}

  ## Table of Contents
  
  * Installation (#Installation)
  * Technology (#Technology)
  * Usage (#Usage)
  * Credit (#Credit)
  * License (#License)
  * Feature (#Feature)
  * Test (#Test)

  ## Technology
  ${answers.technology.join(',')}

  ## Installation

  ${answers.installation}

  ## Usage 

  ${answers.usage}

  ## Credits

  ${answers.credits}


  ## License

  ${answers.license} License

  ## Feature 

  ${answers.feature}

  ## Test 

  ${answers.tests}
  `;
}

module.exports = generatePage;