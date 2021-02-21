function generateMarkdown(data) {
  return `
  # ${data.title}
  ![Badge for license](https://img.shields.io/badge/license-${data.license}-blue)<br/>
  

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Description](#description)
  * [Tests](#tests)

  ## Description 
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributing 
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## License
  This application is covered under the ${data.license} license. 
  
  ## Questions
  Feel free to reach out to me through the following contact methods for any questions or concerns.\n
  Github: [${data.username}](https://github.com/${data.username})\n
  Email: ${data.email}
  ---
  This README was created by the super awesome, super simple GOOD README generator 
  
`;
}

module.exports = generateMarkdown;
