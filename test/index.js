const { expect } = require('chai')

const saiposNumberCipher = require('../lib')

describe('saiposNumberCipher', function () {
  it('should throw an invalid dictionary error when dictionary contain repeated chars', function() {
    expect(() => new saiposNumberCipher('vvadsterty')).throws('Dictionary must be a 10 unique characters sequence!')
  })

  it('String encryption should return an error', function () {
    const cipher = new saiposNumberCipher('rnpklsmxhv')

    expect(() => cipher.encrypt('42')).throws('42 must be a number!')
  })

  it('\'42\' encryption should return \'lp\'', function () {
    const cipher = new saiposNumberCipher('rnpklsmxhv')
    
    expect(cipher.encrypt(42)).to.equals('lp')
  })
  
  it('\'lp\' decryption should return \'42\'', function () {
    const cipher = new saiposNumberCipher('rnpklsmxhv')

    expect(cipher.decrypt('lp')).to.equals(42)
  })
})
