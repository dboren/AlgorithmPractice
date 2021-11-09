// Write code to create a function takes a string and returns a new string with the first letters of each word capitalized

var titleCase = function(str) {

    var result = [];
    var words = str.split(' ');
    console.log("split words: " + words);

    for (var i = 0; i < words.length; i++) {

        var word = words[i].split('');

        word[0] = word[0].toUpperCase();
        console.log(word);

        result.push(word.join(''));
        console.log(result);
    }

    return result.join(' ');
};
