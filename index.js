// Code your solution in this file!

const returnFirstTwoDrivers = function(array){
    return array.slice(0,2)
}

const returnLastTwoDrivers = function(array){
    return array.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(i){
    return function(x){return x * i}
}

const fareDoubler = (x) => createFareMultiplier(2)(x)
const fareTripler = (x) => createFareMultiplier(3)(x)

function selectDifferentDrivers(array, func){
    return func(array)
}


