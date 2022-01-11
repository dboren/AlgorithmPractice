// Write code to create a function that accepts a string and returns the string in camelCase

var camelCase = function(str) {

    var camelString = "";
    var words = str.toLowerCase().split(" ");
    console.log("words: " + words);

    for (var i = 0; i < words.length; i++) {

        var word = words[i];
        console.log("word: " + word);

        var chars = word.split(" ");
        console.log("characters: " + chars);


    }

    // for (var i = 0; i < str.length; i++) {

    //     console.log(str[i]);

    //     if (str[i] == " " ) {

    //         // upperify str[i+1] and delete str[i]

    //         str[i+1].toUpperCase();

    //         str[i].pop()

    //         console.log("string so far: " + str)

    //     }

    //     console.log("new string: " + str)

        

    // }
};
