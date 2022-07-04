// Write code to create a function that accepts an array numbers
// Return `true` is no number appears in the array more than once, else return `false`

var isUnique = function(arr) {

    let counter = 0;
    let selector = 1;


    for (let i = 0; i < arr.length; i++) {

        if (arr[i] == arr[i + selector]) {

            counter++;
        }

    }
};
