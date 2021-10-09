// Write code to return the the number of vowels in `str`

var vowelCount = function(str) {

    var result = 0;

    // str.toLowerCase();

    for (i = 0; i < str.length; i++) {
        
        var currentLetter = str[i].toLowerCase();
        console.log("current letter: ", currentLetter)

        if (currentLetter === "a" || currentLetter === "e" || currentLetter === "i" || currentLetter === "o" || currentLetter === "u") {

            result++;
            console.log(result);
        }
    }

    return result;
};
