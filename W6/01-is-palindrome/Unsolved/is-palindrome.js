// Write code that returns true if `str` is a palindrome, and false if `str` is not a palindrome

var isPalindrome = function(str) {

    let input = str;

    function invertStr(input) {

        let strArr = split(input);

        let invArr = reverse(strArr);

        let inverseStr = join(invArr);

        return inverseStr
        
    }

    invertStr(input);

    if (input === inverseStr) {
        
        return true
    }
};
