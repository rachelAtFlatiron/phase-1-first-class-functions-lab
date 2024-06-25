// Code your solution in this file!
const drivers = ["Sonia", "Tiago", "K'shaani", "Khalil", "Henry", "Lily"]

//const returnFirstTwoDrivers = function () {}

//explicit return
// const returnFirstTwoDrivers = (drivers) => {
//     return drivers.slice(0, 2)
// }


//implicit return 
const returnFirstTwoDrivers = (drivers) => drivers.slice(0, 2)

//last index is drivers.length - 1
//but slice is exclusive, so our second paramter can be drivers.length
const returnLastTwoDrivers = (drivers) => drivers.slice(drivers.length - 2, drivers.length)

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = (multiplier) => {
    return (fare) => {
        return multiplier * fare
    }
}

let innerFareFunction = createFareMultiplier(5)
let finalFare = innerFareFunction(6)

// skipping reassignment of initial return val of anon function
let fare = createFareMultiplier(3)(2)

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = (drivers, selectFunction) => {
    return selectFunction(drivers)
}

let firstTwo = selectDifferentDrivers(drivers, returnFirstTwoDrivers)
let lastTwo = selectDifferentDrivers(drivers, returnLastTwoDrivers)