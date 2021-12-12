// Write code to create a function that accepts an array of numbers, finds the largest two numbers, and returns the product of the two

var productOfLargestTwo = function(arr) {

    var largest = null;
    var runnerUp = null;

    console.log(arr);

    // largest = Math.max(...arr);
    // console.log(largest);

    // var newArr = arr.filter(int => (int >= largest));
    // console.log(newArr);

    // runnerUp = Math.max(...newArr);
    // console.log(runnerUp);

    for (i = 0; i < arr.length; i++) {

        var currentNumber = arr[i];

        if (currentNumber > largest || largest === null) {

            runnerUp = largest;
            largest = currentNumber;

        } else if (currentNumber > runnerUp || runnerUp === null) {

            runnerUp = currentNumber
        }

        result = larget * runnerUp;
    }


};
