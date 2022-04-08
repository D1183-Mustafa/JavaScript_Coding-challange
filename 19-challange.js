// This code challenge has two sub tasks. You are requested to find solutions to convert binary number to decimal and decimal number to binary.

// For the purpose of this code challenge, please write your own code rather than using built-in functions to convert numbers to different base systems. Here below built-in functions in JavaScript and Python:

function mustafa(number, convert) {
  let result2 = "";
  let result10 = 0;
  if (convert === 2) {
    while (number >= 1) {
      result2 += String(parseInt(number % 2));
      number = number / 2;
    }
    result2 = result2.split("").reverse().join("");
    return result2;
  } else if (convert === 10) {
    let stringNumber = String(number).split("").reverse().join("");
    for (let i = 0; i < stringNumber.length; i++) {
        console.log(i);
        result10 +=parseInt(stringNumber[i]) * Math.pow(2,i)
        
    }
    return result10;
  }

}


