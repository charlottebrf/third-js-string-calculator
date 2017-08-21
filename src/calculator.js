export class Calculator {
  add(string) {
    return this.stringChecker(string)
  }

  stringChecker(string) {
    if ( !string ) {
      return 0;
    } else {
      let splitString = string.split(",")
      splitString = this.convertToInteger(splitString)
      return splitString.reduce(
        ( acc, cur ) => acc + cur, 0);
      }
    }

    convertToInteger(splitString) {
      return [...splitString].map(maybeNumber => parseInt(maybeNumber, 10))
    }
  }
