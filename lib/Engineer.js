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

module.exports = Engineer;