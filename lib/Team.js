const inquirer = require('inquirer');
const { addToMyTeam, generatePage } = require('../src/page-template');
const writeFile = require('../utils/generate-site')
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

// Construct Team object template
class Team {
  constructor() {
  }

  // App initialization message
  initializeTeam () {
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
    // initialize inqurirer to gather user input
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
      // Prompt the user for additional information depending on the team member role
      .then(employeeInfo => {
        // If team member is manager aqcuire the office number of the manager
        if (employeeType === 'manager') {
          inquirer
            .prompt([
              {
                type: 'input',
                name: 'officeNumber',
                message: `Enter the team ${employeeType} office number`,
                validate: officeNumber => {
                  if (officeNumber) {
                    return true;
                  } else {
                    console.log(`Please enter the team ${employeeType} office number!`);
                    return false;
                  }
                }
              },
            ])
            // combine user input data from previous questions
            .then(officeNumber => {
              const managerInfo = { ...employeeInfo, ...officeNumber }
              return managerInfo
            })
            // create a new Manager object with the provided user input data
            .then(({ name, id, email, officeNumber }) => {
              const newTeamMember = new Manager(name, id, email, officeNumber)
              // Generate template literal HTML from Manager object
              // Add generated HTML to myTeamHTML array
              addToMyTeam(newTeamMember)
              // Prompt user to add another team member or complete the team
              this.addTeamMember()
            })
        }
        // If team member is engineer aquire github information of the engineer
        if (employeeType === 'engineer') {
          inquirer
            .prompt([
              {
                type: 'input',
                name: 'github',
                message: `Enter the team ${employeeType} Github username`,
                validate: github => {
                  if (github) {
                    return true;
                  } else {
                    console.log(`Please enter the team ${employeeType} Github username!`);
                    return false;
                  }
                }
              },
            ])
            // combine user input data from previous questions
            .then(github => {
              const engineerInfo = { ...employeeInfo, ...github }
              return engineerInfo
            })
            // create a new Engineer object with the provided user input data
            .then(({ name, id, email, github }) => {
              const newTeamMember = new Engineer(name, id, email, github)
              // Generate template literal  HTML from Engineer object
              // Add generated HTML to myTeamHTML array
              addToMyTeam(newTeamMember)
              // Prompt user to add another team member or complete the team
              this.addTeamMember()
            })
        }
        // If team member is intern aquire school information
        if (employeeType === 'intern') {
          inquirer
            .prompt([
              {
                type: 'input',
                name: 'school',
                message: `Enter the team ${employeeType} school name`,
                validate: school => {
                  if (school) {
                    return true;
                  } else {
                    console.log(`Please enter the team ${employeeType} school name!`);
                    return false;
                  }
                }
              },
            ])
            .then(school => {
              // combine user input data from previous questions
              const internInfo = { ...employeeInfo, ...school }
              return internInfo
            })
            .then(({ name, id, email, school }) => {
              const newTeamMember = new Intern(name, id, email, school)
              // Generate template literal HTML from Engineer object
              // Add generated HTML to myTeamHTML array
              addToMyTeam(newTeamMember)
              // Prompt user to add another team member or complete the team
              this.addTeamMember()
            })
        }
      })
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
          this.createTeamMember('engineer')
        } else if (role === 'Intern') {
          this.createTeamMember('intern')
        } else {
          // If user chooses 'Finish' the generateTeam method is activated
          // This ultimately returns a template literal with HTML
          this.generateTeam()
        }
      })
  };
  // myTeamHTML is looped through and each team members HTML is interpolated
  // into the generatePage function template literal which fully formats the HTML
  generateTeam() {
    const pageHTML = generatePage()
    // Write file to the file system
    // Inform user if application was successful
    return writeFile(pageHTML).then(writeFileResponse => {
      console.log(writeFileResponse.message);
    })
  }
}

module.exports = Team;