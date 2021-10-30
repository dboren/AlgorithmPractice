// Write code to create a function that returns the factorial of `num`

var factorial = function(num) {

    var result = 1;

    for (i = num; i > 0; i--) {
        result = i * result;
    }

    return result;
};
