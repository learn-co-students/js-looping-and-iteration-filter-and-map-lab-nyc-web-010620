
function driversWithRevenueOver(drivers, revenue){
  return drivers.filter(function (el){
    if (el.revenue > revenue){
     return el
    }
  })
}

function driverNamesWithRevenueOver(drivers, revenue){
  return driversWithRevenueOver(drivers, revenue).map(function (el){
    return el.name
  })
}


function exactMatch (drivers, condition) {
  return drivers.filter(function (el) {
    let matches = "";

    for(const key in condition){
      matches = el[key] === condition[key];
    }
    return matches;
  });
}

function exactMatchToList(drivers, condition){
  return exactMatch (drivers, condition).map(function (el){
    return el.name
  })
}
