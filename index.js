const inquirer = require('inquirer');
// const employee = require('.lib/Employee');
// const manager = require('.lib/Manager');
// const engineer = require('.lib/Engineer');
// const intern = require('.lib/Intern');

const managerPrompts = () => {
  console.log(`
======================
Team Profile Generator
======================
`);
  return inquirer
    .prompt([
      {
        type: 'input',
        name: 'managerName',
        message: 'Enter the name of the team manager',
        validate: manager => {
          if (manager) {
            return true;
          } else {
            console.log('Please enter the team manager name!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'managerId',
        message: 'Enter the team manager employee ID',
        validate: managerId => {
          if (managerId) {
            return true;
          } else {
            console.log('Please enter the team manager employee ID!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'managerEmail',
        message: 'Enter the team manager email address',
        validate: managerEmail => {
          if (managerEmail) {
            return true;
          } else {
            console.log('Please enter the team manager email address!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'managerOffice',
        message: 'Enter the team manager office number',
        validate: managerOffice => {
          if (managerOffice) {
            return true;
          } else {
            console.log('Please enter the team manager office number!');
            return false;
          }
        }
      },
    ]);
};

const employeeTypePrompts = () => {

  return inquirer
    .prompt([
      {
        type: 'list',
        name: 'employeeType',
        message: 'Would you like to add an engineer or intern to your team?',
        choices: ['Engineer', 'Intern', 'Continue']
      },
    ]);
};

const engineerPrompts = () => {

  return inquirer
    .prompt([
      {
        type: 'input',
        name: 'engineerName',
        message: 'Enter the name of the team engineer',
        validate: engineer => {
          if (engineer) {
            return true;
          } else {
            console.log('Please enter the team engineer name!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'engineerId',
        message: 'Enter the team engineer employee ID',
        validate: engineerId => {
          if (engineerId) {
            return true;
          } else {
            console.log('Please enter the team engineer employee ID!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'engineerEmail',
        message: 'Enter the team engineer email address',
        validate: engineerEmail => {
          if (engineerEmail) {
            return true;
          } else {
            console.log('Please enter the team engineer email address!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'engineerGithub',
        message: 'Enter the team engineer Github username',
        validate: engineerGithub => {
          if (engineerGithub) {
            return true;
          } else {
            console.log('Please enter the team engineer Github username!');
            return false;
          }
        }
      },
    ]);
};

const internPrompts = () => {

  return inquirer
    .prompt([
      {
        type: 'input',
        name: 'internName',
        message: 'Enter the name of the team intern',
        validate: intern => {
          if (intern) {
            return true;
          } else {
            console.log('Please enter the team intern name!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'internId',
        message: 'Enter the team intern employee ID',
        validate: internId => {
          if (internId) {
            return true;
          } else {
            console.log('Please enter the team intern employee ID!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'internEmail',
        message: 'Enter the team intern email address',
        validate: internEmail => {
          if (internEmail) {
            return true;
          } else {
            console.log('Please enter the team intern email address!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'internSchool',
        message: 'Enter the team intern school name',
        validate: internSchool => {
          if (internSchool) {
            return true;
          } else {
            console.log('Please enter the team intern school name!');
            return false;
          }
        }
      },
    ]);
};
