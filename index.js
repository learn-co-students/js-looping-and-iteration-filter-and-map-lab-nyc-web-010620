// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
    return drivers.filter(function (driver) {
        return driver.revenue > revenue
    })
}

function driverNamesWithRevenueOver(drivers, revenue) {
    return driversWithRevenueOver(drivers, revenue).map(function (driver) {
        return driver.name
    })
}


function exactMatch(drivers, condition) {
    return drivers.filter(function (driver) {
        let matches = "";

        for (const key in condition) {
            matches = driver[key] === condition[key];
        }
        return matches;
    });
}

function exactMatchToList(drivers, condition) {
    return exactMatch(drivers, condition).map(function (driver) {
        return driver.name
    })
}