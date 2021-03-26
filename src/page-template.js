function generatePage(answers) {
  return `
  # ${answers.title}

  ## Description 

  ${answers.description}

  ## Table of Contents (Optional)

  * ${answers.tableOfContents}


  ## Installation

  ${answers.installation}

  ## Usage 

  ${answers.usage}

  ## Credits

  ${answers.credits}


  ## License

  ${answers.license} License

  ## Feature (Optional)

  ${answers.feature}

  ## Test (Optional)

  ${answers.tests}
  `;
}

module.exports = generatePage;