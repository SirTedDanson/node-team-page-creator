const basicInfo = require('./Employee');

class Manager extends basicInfo {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
};

module.exports = Manager;