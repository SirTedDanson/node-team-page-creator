// create the Engineer object template properties and methods
// uses Employee object template
const basicInfo = require('./Employee');

class Engineer extends basicInfo {

  constructor (name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }

  getGithub () {
    return (`https://github.com/${this.github}`);
  }
}
// Export Engineer object template
module.exports = Engineer;