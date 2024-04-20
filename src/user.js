class User {
  constructor(id, firstName, lastName) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
  }
  displayInfo() {
    return `first name: ${this.firstName}, last name: ${this.lastName}`;
  }
}

module.exports = { User };
