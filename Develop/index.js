// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown');
const writeFileAsync = util.promisify(fs.writeFile);
// TODO: Create an array of questions for user input
function questions() {
       return inquirer.prompt([
        {
            type:'input',
            name:'username',
            message: "What is your github username?"
        },
        {
            type:'input',
            name:'email',
            message: "What is your email address?"
        },
        {
            type: 'input',
            name: 'title',
            message: "What is the title of your project?",
        },
        {
            type: 'input',
            name: 'description',
            message: "Tell me about your project. What does it do specifically?",
        },
        {
            type: 'input',
            name: 'installation',
            message: "Please list the steps for any installations you had in this project."
        },
        {
            type:'input',
            name:'usage',
            message:"Please provide exapmples of the project in use."
        },
        {
            type:'input',
            name:'contributing',
            message:"Would you like other developers to contribute to this project? If so, please provide guidance on how they can contribute."
        },
        {
            type:'input',
            name:'tests',
            message:"Did you write any tests for this project? If so, please provide them."
        },
        {
            type:'list',
            name:'license',
            choices:[' ','MIT','GPL','BSD','Apache','CC0','GNU','IBM','SIL'],
            message:"What license would you like to use for this README. Select one."
        }
    ]);
}





// // TODO: Create a function to write README file
// function writeToFile(fileName, data) { 
      // fs.writeFile('New-README.md', generateMarkdown, (err) =>
    // err ? console.error(err) : console.log('Success!'));
// }

// // TODO: Create a function to initialize app
async function init() { 
    try {
        const userInput = await questions();
        const markdown = generateMarkdown(userInput);

        await writeFileAsync("New-README.md",markdown);
        console.log(userInput);
    } catch(err) {
        console.log(err);
    }

  
}

// // Function call to initialize app
init();
