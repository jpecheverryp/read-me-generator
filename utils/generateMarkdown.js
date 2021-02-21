// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case 'Apache 2.0':
      return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    case 'GNU GPLv3':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    default:
      return ''
  }
}

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== '' && license !== 'None') {
    return `This project uses the [${license}](LICENSE) License`;
  } else {
    return 'This project does not have any license';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectName}
  ${renderLicenseBadge(data.license)}
## Description
${data.description}
## Table of contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contribution Guidelines](#contribution)
- [Testing Instructions](#testing)
- [Questions](#questions)
## Installation
${data.installation}
## Usage
${data.usage}
## License
${renderLicenseLink(data.license)} 
## Contribution
${data.contributions}
## Testing
${data.testing}
## Questions
You can contact me at: 
${data.email}
and you can find me on github at:
${data.githubName}
`;
}

module.exports = generateMarkdown;
