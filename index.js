/*~~~~~~~~~~~~~~~~~~~~MY SOLUTION~~~~~~~~~~~~~*/

const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
function returnFirstTwoDrivers(drivers){
    return drivers.slice(0,2);
}
const returnLastTwoDrivers = (drivers) => {
    return drivers.slice(drivers.length-2, drivers.length)
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (num) => {
    const retFunction = (num) => {
        return num*num;
    }
    return retFunction;
}

const fareDoubler = (num) => {
    return num*2;
}

function fareTripler(num){
    return num*3;
}

function selectDifferentDrivers(drivers, func) {
    return func(drivers);
}

