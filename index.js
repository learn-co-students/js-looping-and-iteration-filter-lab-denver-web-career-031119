// Code your solution in this file

function findMatching (array, name) {
  return array.filter(function (driver) {
    return driver.toLowerCase() == name.toLowerCase()
  })
}

function fuzzyMatch (array, string) {
  return array.filter(function (driver) {
    return driver.startsWith(string)
  })
}

function matchName (array, value) {
  return array.filter(function (driver) {
    return driver.name.toLowerCase() == value.toLowerCase()
  })
}
