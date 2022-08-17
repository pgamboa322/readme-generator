// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # ${data.title}
  
  ## Table of Contents
  - [Description](#appDescription)
  - [Installation](#installation)
  - [Usage](#useDescription)
  - [Contributions & Guidelines](#contributorGuidelines)
  - [Tests](#testing)
  - [License](#license)

  ## Description \n
  ${data.description} \n
  
  ## Installation \n
  ${data.installation} \n
  
  ## Usage \n
  ${data.usage} \n
  
  ## Contributions & Guidelines \n
  ${data.contributing} \n
  
  ## Tests \n
  ${data.tests} \n
  
  ## Questions \n
  [To reach me by email click here.](mailto:${data.email}.com) \n
  [Click for my Github profile.](https://github.com/${data.github}) \n
  ## Badges \n
  
  ![License](https://img.shields.io/badge/license-${data.license}-blue.svg) \n
`;
}

module.exports = generateMarkdown;
