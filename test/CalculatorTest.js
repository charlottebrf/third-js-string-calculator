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

  it('handles strings including delimeters which don\'t split numbers', () => {
    expect(calculator.add("//[]\n123")).to.equal(6)
  })

  it("raises an error for a negative number", () => {
    expect( () => { calculator.add("-1;2") }).to.throw(Error, /negatives not allowed/)
  })

  it("raises an error for multiple negative numbers", () => {
    expect( () => { calculator.add("3, -1, -2, 4") }).to.throw(Error, /negatives not allowed/)
  })

  it("ignores numbers with a value of 1000+", () => {
    expect(calculator.add("//[]\n1004,2,3")).to.equal(5)
  })
})
