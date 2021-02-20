const questions = [
    // Project Name or title
    {
        type: 'input',
        name: 'projectName',
        message: 'What is the name of the project?',
        default: 'Project Name'
    },
    // Description
    {
        type: 'input',
        name: 'description',
        message: 'Please add a description of your project',
        default: 'Project Description'
    },
    // Installation
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install this project?',
        default: 'Project Installation'
    },
    // Usage
    {
        type: 'input',
        name: 'usage',
        message: 'How should this project be used?',
        default: 'Project Usage'
        
    },
    // License
    {
        type: 'list',
        name: 'license',
        choices: [
            'None',
            'MIT',
            'Apache 2.0',
            'GNU GPLv3',
            'Other'
        ],
        default: 0
    },
    // Contributing to repo
    {
        type: 'input',
        name: 'contributions',
        message: 'How can other developers contribute to this project?',
        default: 'Project Contributions Guidelines'
    },
    // Testing
    {
        type: 'input',
        name: 'testing',
        message: 'How can other developers test your project?',
        default: 'Testing Instructions'
    },
    // Github acc
    {
        type: 'input',
        name: 'githubName',
        message: 'What is your Github User Name?',
        default: 'GitHubUserName'
    },
    // Email
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
        default: 'Email@example.com'
    }
];

module.exports = questions;