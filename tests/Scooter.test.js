const Scooter = require('../src/Scooter')
describe('scooter object', () => {
  test('Scooter class should create Scooter instance', () => {
    const scooter = new Scooter()
    expect(scooter).toBeInstanceOf(Scooter)
  })
})

// Method tests
describe('scooter methods', () => {

it('should rent scooter if not broken and charged', () => {
  const scooter2 = new Scooter('Station 2');
  expect(scooter.serial).not.toBe(scooter2.serial);
})
it('should dock the scooter at the station', () => {
  scooter.rent(user);
  scooter.dock('Station 2');
  expect(scooter.station).toBe('Station');
  expect(scooter.user).toBe(null)
})
})
