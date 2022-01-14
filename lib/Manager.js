// create the Intern object template properties and methods
// uses Employee object template
const basicInfo = require('./Employee');

class Manager extends basicInfo {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
};
// Export Manager object template
module.exports = Manager;