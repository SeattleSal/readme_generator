// function to generate markdown for README
function generateMarkdown(data) {
return `
README for ${data.username}
# ${data.pname}
## Table of Contents
## Description
${data.pdescription}
## Links
## Dependencies
The following commands should be run for dependencies: ${data.dependencies}
## Use
${data.repo}
## Tests
The following commands should be run for testing: ${data.tests}
## How to Contribute
${data.contribute}
## Contact
${data.email}
## License
${data.pdescription}`;

}

module.exports = generateMarkdown;
