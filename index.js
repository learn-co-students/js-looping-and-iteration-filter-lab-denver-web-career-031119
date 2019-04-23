// Code your solution in this file
function findMatching(drivers, name) {
  return drivers.filter(function(driverName) {
    return driverName.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch(drivers, characters) {
  return drivers.filter(function(driverName) {
    return driverName.startsWith(characters);
  });
}

function matchName(drivers, string) {
  return drivers.filter(function(driverName) {
    return driverName.name.toLowerCase() === string.toLowerCase();
  });
}
