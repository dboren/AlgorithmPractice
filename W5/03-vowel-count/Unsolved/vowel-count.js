// Write code to return the the number of vowels in `str`

var vowelCount = function(str) {

    let totalVowels = 0;

    str.toLowerCase();

    for (i = 0; i < str.length; i++) {

        if (str[i] == "a" || "e" || "i" || "o" || "u") {

            totalVowels++;
        }
    }

    return totalVowels;
};
