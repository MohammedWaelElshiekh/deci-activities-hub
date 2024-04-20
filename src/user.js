class User {
  constructor(id, firstName, lastName) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
  }
  displayInfo() {
    console.log(`first name: ${this.firstName}, last name: ${this.lastName}`);
  }
}

module.export = { User };
