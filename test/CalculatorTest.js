import { expect } from 'chai';
import { Calculator } from '../src/calculator.js'

describe('Calculator', () => {
  it('handles an empty string', () => {
    let calculator = new Calculator()
    expect(calculator.add("")).to.equal(0)
  })
})
