class User {
  constructor(username, password, age,) {
    this.username = username;
    this.password = password;
    this.age = age;
    this.loggedIn = false;
  }
  login(password) {
  if (this.password === password) {
    this.loggedIn = true;
    console.log(`${this.username} is logged in`)
  } else {
    throw new Error('Incorrect Password')
  }
}
logout() {
  if (this.loggedIn) {
    this.loggedIn = false;
    console.log(`${this.username} has logged out`);
  } else {
    throw new Error('User is not logged in')
  }
}

}

module.exports = User
