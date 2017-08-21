export class Calculator {
  add(string) {
    let splitString = string.split(",")
    let integers = this.stringChecker(splitString)
    return integers.reduce(( acc, cur ) => acc + cur, 0);
  }

  stringChecker(splitString) {
    let maybeNumbers = []
    splitString.forEach(char => {
      if ( !char ) {
        maybeNumbers.push(0);
      } else {
        let integer = parseInt(char)
        maybeNumbers.push(integer);
      }
    })
    return maybeNumbers
  }
}
