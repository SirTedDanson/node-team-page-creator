// create the Employee object template properties and methods
class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  getName() {
    return (`${this.name}`);
  }
  getId() {
    return (`${this.id}`);
  }
  getEmail() {
    return (`${this.email}`);
  }
  getRole() {
    return (`${this.constructor.name}`);
  }
};
// Export Employee object template
module.exports = Employee;