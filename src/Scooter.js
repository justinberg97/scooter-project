class Scooter {
  static nextSerial = 1;
  // only takes in one constructor so we can limit complexity
constructor(station) {
  this.station = station;
  this.user = null;
  this.serial = Scooter.nextSerial++;
  this.charge = 100;
  this.isBroken = false;
}
rent(user) {
  if (this.chare > 20 && !this.isBroken) {
    this.station = null;
    this.user = user;
    console.log('Scooter is rented');
  }else {
    throw new Error('Scooter needs to charge or needs repair')
  }
}
dockStation(station) {
  if(this.station === null) {
    throw new Error('Scooter is already at station')
  }
  this.station = station;
  this.user = null;
  console.log('Scooter is docked')
}
}

module.exports = Scooter
