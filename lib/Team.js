const inquirer = require('inquirer');
const { addToMyTeam, generatePage } = require('../src/page-template');
const writeFile = require('../utils/generate-site')
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Employee = require('./Employee');

// Construct Team object template
class Team {
  constructor() {
  }

  // App initialization message
  initializeTeam() {
    console.log(`
  ===================================
  Initializing Team Profile Generator
  ===================================
  `);
    // Add first team member, the manager
    // Team object initializeTeam method activates createTeamMember method
    this.createTeamMember('manager')
  }
  // Method for creating a new team member, creates a newTeamMember object from the lib/ classes
  createTeamMember(employeeType) {

    console.log(`
  ==========================
  Please add a team ${employeeType}
  ==========================
  `);
    // initialize inqurirer to gather user input, basic employee info
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'name',
          message: `Enter the name of the team ${employeeType}`,
          validate: manager => {
            if (manager) {
              return true;
            } else {
              console.log(`Please enter the team ${employeeType} name!`);
              return false;
            }
          }
        },
        {
          type: 'input',
          name: 'id',
          message: `Enter the team ${employeeType} employee ID`,
          validate: id => {
            if (id) {
              return true;
            } else {
              console.log(`Please enter the team ${employeeType} employee ID!`);
              return false;
            }
          }
        },
        {
          type: 'input',
          name: 'email',
          message: `Enter the team ${employeeType} email address`,
          validate: email => {
            if (email) {
              return true;
            } else {
              console.log(`Please enter the team ${employeeType} email address!`);
              return false;
            }
          }
        },
      ])
      .then(employeeInfo => {
        this.rolePrompts(employeeInfo, employeeType);
      });
  };
  // prompt the user for role specific information
  rolePrompts(employeeInfo, employeeType) {
    let messageInfo = '';
    switch (employeeType) {
      case "manager":
        messageInfo = 'office number'
        break;
      case "engineer":
        messageInfo = 'Github username'
        break;
      case "intern":
        messageInfo = 'school name'
        break;
    }
    inquirer
          .prompt([
            {
              type: 'input',
              name: 'roleInfo',
              message: `Enter the team ${employeeType} ${messageInfo}!`,
              validate: officeNumber => {
                if (officeNumber) {
                  return true;
                } else {
                  console.log(`Please enter the team ${employeeType} ${messageInfo}!`);
                  return false;
                }
              }
            },
          ])
          .then(roleInfo => {
            this.createClass(employeeInfo, employeeType, roleInfo)
          });
  };
  // Create the team member class
  createClass({ name, id, email }, type, { roleInfo }) {
    let newTeamMember = Employee
    switch (type) {
      case "manager":
        newTeamMember = new Manager(name, id, email, roleInfo)
        break;
      case "engineer":
        newTeamMember = new Engineer(name, id, email, roleInfo)
        break;
      case "intern":
        newTeamMember = new Intern(name, id, email, roleInfo)
        break;
    }
    // Generate HTML template literal from new team member and add to an array
    addToMyTeam(newTeamMember)
    // Prompt user to add another team member or complete the team
    this.addTeamMember()
  };

  // Method for adding a team member
  addTeamMember() {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'role',
          message: 'Would you like to add an engineer or intern to your team?',
          choices: ['Engineer', 'Intern', 'Finish']
        },
      ])
      // Create a new Engineer or Intern team member based on user selection
      .then(({ role }) => {
        if (role === 'Engineer') {
          this.createTeamMember('engineer');
        } else if (role === 'Intern') {
          this.createTeamMember('intern');
        } else {
          // If user chooses 'Finish' the generateTeam method is activated
          // This ultimately returns a template literal with HTML
          this.generateTeam();
        }
      })
  };
  // myTeamHTML is looped through and each team members HTML is interpolated
  // into the generatePage function template literal which fully formats the HTML
  generateTeam() {
    const pageHTML = generatePage();
    // Write file to the file system
    // Inform user if application was successful
    return writeFile(pageHTML).then(writeFileResponse => {
      console.log(writeFileResponse.message);
    })
  }
}

module.exports = Team;