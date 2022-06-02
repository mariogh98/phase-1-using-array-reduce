const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
/*const reducer = batteryBatches.reduce(function(totalBatteries, currentBattery) {
    if (currentBattery in totalBatteries) {
        totalBatteries[currentBattery] ++;

    }
})*/

const totalBatteries = batteryBatches.reduce(function(accumulator, element){
    return (element += accumulator) + 0;
});