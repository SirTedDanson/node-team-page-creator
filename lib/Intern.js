const basicInfo = require('./Employee');

class Intern extends basicInfo {

  constructor (name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }

  getSchool () {
    return (`Attending ${this.school}`);
  }
}

module.exports = Intern;