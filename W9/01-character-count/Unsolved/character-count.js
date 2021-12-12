// Write code to create a function that accepts a string and returns an object containing the number of times each character appears in the string

var characterCount = function(str) {

    var result = {};

    for (i = 0; i < str.length; i++) {

        var currentChar = str[i];
        console.log(currentChar);

        if (currentChar in result) {
            result[currentChar]++;
            console.log(result);
        } else {
            result[currentChar] = 1;
        }
    }

    return result;
};
