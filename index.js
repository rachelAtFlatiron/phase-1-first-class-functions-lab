const returnFirstTwoDrivers = (driversArray) => {
    const firstTwoDrivers = [driversArray[0], driversArray[1]]
    return firstTwoDrivers.slice(0, 2)
    //return driversArray.slice(0, 2)
}

//.slice(-2)...-2 is last 2 (-1 is the last element)
//0 represents the first element
const returnLastTwoDrivers = (driversArray) => {
    return driversArray.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]


//createFareMultiplier(4)(2) => 8

//const fareFunction = createFareMultiplier(4)
//fareFunction(2) => 8
const createFareMultiplier = (fareMultiplier) => {
    return (fare) => {
        return fare * fareMultiplier
    }
}

// const fareDoubler = (fare) => {
//     //return a function where the fareMultiplier is 2
//     const twoMultiplier = createFareMultiplier(2)
//     console.log(twoMultiplier)
//     return twoMultiplier(fare)
// }

const fareDoubler = createFareMultiplier(2) //returns a function
//fareDoubler -> anonymous function with the #2 as fareMultiplier
//fareDoubler(3) -> 3 represents the fare

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = (drivers, driversFunction) => {
    console.log(driversFunction)
    return driversFunction(drivers)
}