// Write code to create a function that accepts an array of numbers, finds the largest two numbers, and returns the product of the two

var productOfLargestTwo = function(arr) {

    var largest;
    var runnerUp;

    console.log(arr);

    largest = Math.max(...arr);
    console.log(largest);

    arr.filter(largest.valueOf);
    console.log(arr);

    runnerUp = Math.max(...arr);
    console.log(runnerUp);
};
