// Write code to create a function that accepts an array numbers
// Return `true` is no number appears in the array more than once, else return `false`

var isUnique = function(arr) {
    var numMap = {};
    console.info(numMap)
  
    for (var i = 0; i < arr.length; i++) {
      var currentNumber = arr[i];

      console.info(numMap);
      console.log("current: " + currentNumber);
  
      if (numMap[currentNumber] === true)  { //cannot be true if this is the first time this value of currentNumber is read
        return false;
      }
  
      numMap[currentNumber] = true; //since previous condition could not be met, key of currentNumber with value of true is added to numMap
    }
  
    return true;
  };


// function attempted below fails because it can only compare the current loop cycle's number to the next number in the array and will not return false properly unless the repeated number immediately follows itself.

// var isUnique = function(arr) {

//     let counter = 0;
//     let selector = 1;


//     for (let i = 0; i < arr.length; i++) {

//         console.log("arr[i]: " + arr[i]);

//         console.log(arr[i] == arr[i + selector]);

//         if (arr[i] == arr[i + selector]) {



//             counter++;
//             selector++;


//             console.log("counter: " + counter);
//             console.log("sleector: " + selector);

//         } selector++;



//     }

//     if (counter > 0) {

//         return false;

//     } else return true;
// };
