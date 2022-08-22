// Code your solution in this file!
const returnFirstTwoDrivers=(drivers)=>{
    return drivers.slice(0,2);    
}
const returnLastTwoDrivers=(drivers)=>{
    //return an array of the last two drivers
    return drivers.slice(-2);
}
const selectingDrivers= [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier=(n)=>{
    return function (fare){
        return fare*n;
    
    }
};
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);
function selectDifferentDrivers(drivers, function1) {
  return function1(drivers);
}