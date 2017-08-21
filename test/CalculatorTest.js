import { expect } from 'chai';
import { Calculator } from '../src/calculator.js'

describe('Calculator', () => {
  let calculator

  beforeEach(() => {
    calculator = new Calculator()
  })

  it('handles an empty string', () => {
    expect(calculator.add("")).to.equal(0)
  })

  it('handles a single digit string', () => {
    expect(calculator.add("1")).to.equal(1)
  })

  it('handles a two digit string', () => {
    expect(calculator.add("1,2")).to.equal(3)
  })
})
