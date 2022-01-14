// create the Intern object template properties and methods
// uses Employee object template
const basicInfo = require('./Employee');

class Intern extends basicInfo {

  constructor (name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }

  getSchool () {
    return (`School: ${this.school}`);
  }
}
// Export Intern object template
module.exports = Intern;