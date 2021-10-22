// Write code that returns true if `str` is a palindrome, and false if `str` is not a palindrome

var isPalindrome = function(str) {

    let input = str;
    console.log("input: " + input)

    function invertStr(input) {

        let strArr = split(input);
        console.log("strArr: ", strArr)

        let invArr = reverse(strArr);
        console.log("invArr: ", invArr)

        let inverseStr = join(invArr);
        console.log("inverseStr: " + inverseStr)
        
    }

    invertStr(input);

    if (input === inverseStr) {
        
        return true
    }
};
