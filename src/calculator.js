export class Calculator {
  add(string) {
    let integers = this._delimiters(string)
    return integers.reduce(( acc, cur ) => acc + cur, 0);
  }

  _delimiters(string) {
    let splitString = this._removeThousands(string).split("")
    this._checkForNegatives(splitString)
    let maybeIntegers = this._converter(splitString)
    return maybeIntegers.filter((maybeIntegers) => Number.isInteger(maybeIntegers))
  }
  
  _converter(splitString) {
    let maybeIntegers = []
    splitString.forEach(char => {
      if ( !char ) {
        maybeIntegers.push(0);
      } else {
        maybeIntegers.push(parseInt(char))
      }
    })
    return maybeIntegers
  }

  _checkForNegatives(splitString) {
    let negatives = []
    for (const [index, value] of splitString.entries()) {
      if (value == "-") {
        negatives.push('-' + splitString[index + 1])
      }
    }
    if (negatives.length > 0) {
      throw new Error(`negatives not allowed: ${negatives.join(", ")}`)
    }
  }

  _removeThousands(string) {
    return string.replace(/[1-9]\d{3,}/, "")
  }
}
