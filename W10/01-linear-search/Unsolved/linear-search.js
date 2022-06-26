// Write code to create a function that accepts an array of numbers and a target number
// if the target number is present in the array, return its index
// else return -1
// You may not use the `indexOf`, `lastIndexOf` or `includes` methods

var linearSearch = function(arr, target) {

    for (let i=0; i < arr.length; i++) {

        var currNum = arr[i];

        if (currNum === target) {
            
            return i

        }
    }

        result = -1
        // console.log("i: " + i);
        // console.log("result: " + result);
        // console.log("val: " + arr[i]);
        return result

    // if (result == -2) {

    //     result = -1
    // };

    // return result;


};
