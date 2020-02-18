// Code your solution here:

function driversWithRevenueOver(drivers,givenRevenue) {
    return drivers.filter ( (driver) => driver.revenue > givenRevenue)
}

function driverNamesWithRevenueOver(drivers,givenRevenue) {
    return driversWithRevenueOver(drivers,givenRevenue).map ( (driver) => driver.name )
}

function exactMatch(drivers, attribute) {
    let attrKey = Object.keys(attribute)[0]
    let attrValue = attribute[attrKey]
    return drivers.filter ( (driver) => driver[attrKey] === attrValue )
}

function exactMatchToList(drivers,attribute) {
    return exactMatch(drivers,attribute).map ( (driver) => driver.name )
}