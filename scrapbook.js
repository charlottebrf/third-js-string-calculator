_converter(splitString) {
  splitString.reduce((integers, char) => {
    if (!char) {
      return integers.concat(0)
    } else {
      return integers.concat(parseInt(char))
    }
  },[])
}

_converter(splitString) {
  splitString.reduce((integers, char) => { return integers.concat(parseInt(char) || 0 }, [])
}
