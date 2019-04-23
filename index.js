// Code your solution in this file
function findMatching(collection, name) {
    return (collection.filter( function (driver) {
        return driver.toLowerCase() === name.toLowerCase();
    }));
};
function fuzzyMatch(collection, givenSomeName) {
    return (collection.filter(function(driver) {
        return driver.slice(0, givenSomeName.length) === givenSomeName;
    }));
}
function matchName(driversArray, nameString) {
    return driversArray.filter(function(driver) {
        return driver.name.toLowerCase() === nameString.toLowerCase();
    })
}
