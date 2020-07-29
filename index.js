const returnFirstTwoDrivers = (array) => {
    return array.slice(0, 2)
}

const returnLastTwoDrivers = (array) => {
    return array.slice(array.length - 2)
}

const selectingDrivers = [
        returnFirstTwoDrivers,
        returnLastTwoDrivers       
    ]

const createFareMultiplier = (multiplyer) => {
    return (fare) => fare * multiplyer
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = (array, func) => {
    return func(array)
}
