// Write code to return the largest number in the given array

var maxNum = function(arr) {

    var currMax = arr[0];

    for (var i = 0; i <= arr.length; i++) {

        if (currMax < arr[i]) {
            currMax = arr[i];
            console.log("currMax: ", currMax)
            console.log("arr[i]: ", arr[i])

        } else {
            return arr[i];
        }
    }
};
