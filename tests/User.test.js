const User = require('../src/User');
const ScooterApp = require('../src/ScooterApp');

const user = new User('Joe Bloggs', 'test123', 21)

// User tests here
describe('User property tests', () => {
  // test username
  test('username should be a string', () => {
    expect(typeof user.username).toBe('string')
  })
  test('log user with correct password' , () => {
    user.login('password123');
    expect(user.password).toBe(true)
  })

  
  // test('user should be over 18', () => {
  //   user.age(21);
  //   expect()
  // })
})

// test login

// test logout
