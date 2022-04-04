// This is an interview question asked by Yelp.
// Given a mapping of digits to letters (as in a phone number), and a digit string, return all possible letters the number could represent.
// You can assume each valid number in the mapping is a single digit.
// For example if {"2": ["a", "b", "c"], 3: ["d", "e", "f"], …} then "23" should return ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].

function phoneNumber(number){
    const phoneNum = {
        "2" : ["a","b","c"],
        "3" : ["d","e","f"],
        "4" : ["g","h","i"],
        "5" : ["j","k","l"],
        "6" : ["m","n","o"],
        "7" : ["p","q","r","s"],
        "8" : ["t","u","v"],
        "9" : ["w","x","y","z"]
    };
    let result = [];
    let phoneAlpha = [];
    for (const iterator of String(number)) {
        phoneAlpha.push(phoneNum[iterator])
    }

    for (let i = 0; i < phoneAlpha.length-1; i++) {
        for (let j = 0; j < phoneAlpha[i].length; j++) {
            for (let k = 0; k < phoneAlpha[i+1].length; k++) {
                result.push(phoneAlpha[i][j] +phoneAlpha[i+1][k])
                
            }
            
        }
    }
    return result
};

console.log(phoneNumber(23)); // ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']
console.log(phoneNumber(2345)); //['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf', 'dg', 'dh', 'di', 'eg', 'eh', 'ei', 'fg', 'fh', 'fi', 'gj', 'gk', 'gl', 'hj', 'hk', 'hl', 'ij', 'ik', 'il']