// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { 
  return `![Github License](https://img.shields.io/badge/license-${license}-blue.svg)`
 }


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
 ${data.description}

 ##Table of Contents 

- [Installation](#installation)
- [Liscence](#liscence)
- [Usage](#usage)
- [Contribution](#usage)
- [Tests](#test)
- [GitHub Username](#username)
- [Questions](#contactInfo)

 ## Installation
 ${data.installation}

 ## Liscence
${renderLicenseBadge(data.license)}

 ## Usage
 ${data.usage}

 ## Contribution 
${data.contribution}

## Tests
${data.test}

## Questions 
- GitHub User Name: ${data.username}
If you have any questions please reach me at ${data.userEmail}

 


`;
}

module.exports = generateMarkdown;
