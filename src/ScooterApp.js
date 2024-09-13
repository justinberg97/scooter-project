const Scooter = require('./Scooter');
const User = require('./User')
class ScooterApp {
  constructor() {
    this.stations = {
      'Station 1': [],
      'Station 2': [],
      'Station 3': []
    };
    this.registeredUsers = {};
  }
  registerUser(username, password, age) {
    if (this.registeredUsers[username]) {
      throw new Error('User already exists')
    }  
      if (age < 18) {
        throw new Error('User is too young')
      }
      const user = new User(username, password, age);
      this.registerdUsers[username] = user;
      console.log(`${username} registerd`)
    } 
    loginUser(username, password) {
      const user = this.registeredUsers[username];
      if(!user) {
        throw new Error('User not found')
      }
      user.login(password);
      console.log(`${username} logged in`)
    }
    logoutUser(username) {
      const user = this.registeredUsers[username];
      if (!user) {
        throw new Error('No one logged in')
      }
      user.logout();
      console.log(`${username} logged out`)
    }
    createScooter(station) {
      if (!this.stations[station]) {
        throw new Error('Station does not exist')
      } 
      const scooter = new Scooter(station);
      this.stations[station].push(scooter);
      console.log('No such station');
      return scooter;
    }
    dockScooter(scooter, station) {
      if (!this.stations[station]) {
        throw new Error('No such station');
      }
      if (scooter.station) {
        throw new Error('Scooter already at station')
      }
      scooter.dock(station);
      this.stations[station].push(scooter);
      console.log('Scooter is docked')
    }
    rentScooter(scooter, user) {
      let found = false;
      for(let station in this.stations) {
        const index = this.stations[station].indexOf(scooter);
        if (index !== -1) {
          found = true;
          if (scooter.user) {
            throw new Error('Scooter already rented')
          }
          scooter.rent(user); 
          this.stations[station].splice(index, 1);
          console.log('Scooter rented');
          break;
        }
      }
      if (!found) {
        throw new Error('Scooter not found');
      }
    }
    print() {
      console.log('Registered Users:', this.registeredUsers);
      console.log('Stations:');
      for (let station in this.stations) {
        console.log(`${station}: ${this.stations[station].length} scooters`)
      }
    }
   }


module.exports = ScooterApp
