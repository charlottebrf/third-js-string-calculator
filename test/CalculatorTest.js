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

  it('handles more than one delimeter', () => {
    expect(calculator.add("1\n2,3")).to.equal(6)
  })

  it('handles numbers split by multiple delimeters', () => {
    expect(calculator.add("//;\n1;2")).to.equal(3)
    expect(calculator.add("//[*][%]\n1*2%3")).to.equal(6)
  })
})
