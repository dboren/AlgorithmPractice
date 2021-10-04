// Write code to return the largest number in the given array

var maxNum = function(arr) {

    var currMax = arr[0];

    for (var i = 0; i <= arr.length; i++) {

        var currNum = arr[i];

        if (currMax < currNum) {
            currMax = currNum;
            console.log("currMax: ", currMax)
            console.log("currNum: ", currNum)

        }
    }

    return currMax;
};
