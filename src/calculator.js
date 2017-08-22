export class Calculator {
  add(string) {
    let integers = this._delimiters(string)
    return integers.reduce(( acc, cur ) => acc + cur, 0);
  }

  _delimiters(string) {
    let characters = this._removeThousands(string).split("")
    this._checkForNegatives(characters)
    let maybeIntegers = this._converter(characters)
    return maybeIntegers.filter((maybeIntegers) => Number.isInteger(maybeIntegers))
  }

  _converter(characters) {
    return characters.reduce((integers, char) => integers.concat(this._number(char)), [])
  }

  _number(char) {
    if (!char) {
      return 0
    } else {
      return parseInt(char)
    }
  }

  _checkForNegatives(characters) {
    let negatives = []
    for (const [index, value] of characters.entries()) {
      if (value == "-") {
        negatives.push('-' + characters[index + 1])
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
