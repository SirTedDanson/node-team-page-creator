const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

class Team {
  constructor() {
    this.teamMembers = [];
  }

  createTeamMember(employeeType) {

    console.log(`
  ======================
  Team Profile Generator
  ======================
  `);

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
            .then(officeNumber => {
              const managerInfo = { ...employeeInfo, ...officeNumber }
              return managerInfo
            })
            .then(({ name, id, email, officeNumber }) => {
              this.teamMembers.push(new Manager(name, id, email, officeNumber));
              console.log('\n ================= Current Team Roster =================')
              console.log(this.teamMembers);
              this.addTeamMember()
            })
        }
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
            .then(github => {
              const engineerInfo = { ...employeeInfo, ...github }
              return engineerInfo
            })
            .then(({ name, id, email, github }) => {
              this.teamMembers.push(new Engineer(name, id, email, github));
              console.log('\n ================= Current Team Roster =================')
              console.log(this.teamMembers);
              this.addTeamMember()
            })
        }
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
              const internInfo = { ...employeeInfo, ...school }
              return internInfo
            })
            .then(({ name, id, email, school }) => {
              this.teamMembers.push(new Intern(name, id, email, school));
              console.log('\n ================= Current Team Roster =================')
              console.log(this.teamMembers);
              this.addTeamMember()
            })
        }
      })
  };

  addTeamMember() {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'role',
          message: 'Would you like to add an engineer or intern to your team?',
          choices: ['Engineer', 'Intern', 'Finish']
        },
      ]).then(({ role }) => {
        if (role === 'Engineer') {
          this.createTeamMember('engineer')
        } else if (role === 'Intern') {
          this.createTeamMember('intern')
        } else {
          console.log("Team Profile Page Created")
        }
      })
  }
}

new Team().createTeamMember('manager')