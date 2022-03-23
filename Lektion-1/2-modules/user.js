// const user = {
//   firstName: 'Joakim',
//   lastName: 'Wahlström',
//   age: 35,
//   email: 'wahlstrom@mail.com'
// }

// console.log(user);

class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  greet() {
    console.log(`Hello my name is ${this.firstName} ${this.lastName}`);
  }
}

module.exports = User