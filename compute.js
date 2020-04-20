/* Write a function called "computeAverageOfNumbers".
Given an array of numbers, "computeAverageOfNumbers" returns their average. 
If input array is empty, your function should return 0. */

// input - 1 array of numbers
function computeAverageOfNumbers(arrayNums) {
    //checking if array is empty
    if (arrayNums.length === 0) {
        //if it is empty, returning 0
        return 0;
    }
    
    var total = 0;
    //iterating through array using for loop
    for (var i = 0; i < arrayNums.length; i++) {
        //getting the average of the numbers in the array (adding them then dividing)
        var average = (total += arrayNums[i]) / arrayNums.length;
    }//returning the average 
    return average;
}

//testing out our computeAverageOfNumbers function by calling it 
var input1 = computeAverageOfNumbers([28, 24, 92, 56]);
console.log(input1); // --> 50

var input2 = computeAverageOfNumbers([]);
console.log(input2); // --> 0
