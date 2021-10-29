const pow = require('./pow.js');

describe ('pow', () => {
  it('a function that takes a base and exponent and raises the base to the exponent power', () => {
    const actual = pow(5,5)
    const expected = 3125

    expect(actual).toEqual(expected) 
  });
});