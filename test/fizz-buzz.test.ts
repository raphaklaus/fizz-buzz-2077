import assert from 'assert'
import { calc, type } from '../src'

describe('Fizz Buzz', () => {
  it('should return fizz for multiples of 3', () => {
    assert.equal(calc(3), type.Fizz.toString())
  })

  it('should return buzz for multiples of 5', () => {
    assert.equal(calc(5), type.Buzz.toString())
  })

  it('should return buzz for multiples of 3 and 5', () => {
    assert.equal(calc(15), type.FizzBuzz.toString())
  })

  it('should return the number passed, otherwise', () => {
    assert.equal(calc(7), 7)
  })

  it('should refute one of the assertions', () => {
    assert.notEqual(calc(3), type.FizzBuzz.toString())
  })
});
