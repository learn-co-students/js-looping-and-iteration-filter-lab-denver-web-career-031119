// Code your solution in this file
function findMatching(drivers, inputString) {
   return (drivers.filter(function (value) { return value.toLowerCase() === inputString.toLowerCase(); } ) );
}

function fuzzyMatch(drivers, inputString) {
    return (drivers.filter(function (phrase) { return phrase.startsWith(inputString)} ) );
}

function matchName(drivers, inputString) {
    return ( drivers.filter( function (phrase) { return phrase.name === inputString} ) );
}