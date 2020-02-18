// Code your solution here:

function driversWithRevenueOver(driver, revenue){
    return driver.filter(i => i.revenue > revenue)
}

function driverNamesWithRevenueOver(driver, revenue){
    const arr = driversWithRevenueOver(driver, revenue)
    const newArr = []
    for(const drive of arr){
        newArr.push(drive.name)
    }
    return newArr
}

function exactMatch(driver, match){
    return driver.filter(function(person){
        let matches = "";

        for(const attribute in match){
            matches = person[attribute] === match[attribute];
        }
        return matches
    });
}

function exactMatchToList(driver, match){
    return exactMatch(driver, match).map(function(person){
        return person.name
    })
}
