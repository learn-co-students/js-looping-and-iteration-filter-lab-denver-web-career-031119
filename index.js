// Code your solution in this file
function findMatching(drivers, name) {
  return drivers.filter(function (potoat) { return potoat.toLowerCase() === name.toLowerCase()})
}

function fuzzyMatch(drivers, name) {
  return drivers.filter(function (yeet){ return yeet.charAt(0) === name.charAt(0)})
}

function matchName(drivers, name) {
  console.log(drivers)
  console.log(name)
  return (drivers.filter(function (driver) { return driver.name === name}))
}
