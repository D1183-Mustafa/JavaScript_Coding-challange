// Dot Calculator
// You have to write a calculator that receives strings for input. The dots will represent the number in the equation. There will be dots on one side, an operator, and dots again after the oparator. The dots and the operator will be separated by one space.

// Here are the following valid operators :

// + Addition
// - Subtraction
// * Multiplication
// // Integer Division
// Your Work (Task)
// You'll have to return a string that contains dots, as many the equation returns. If the result is 0, return the empty string. When it comes to subtraction, the first number will always be greater than or equal to the second number.

// Examples
// calculator("..... + ...............") => "...................."
// calculator("..... - ...") => ".."
// calculator("..... - .") => "...."
// calculator("..... * ...") => "..............."
// calculator("..... * ..") => ".........."
// calculator("..... // ..") => ".."
// calculator("..... // .") => "....."
// calculator(". // ..") => ""
// calculator(".. - ..") => ""

function dotCalculator(equation) {
    equation = equation.split(" ");

    let [a,operator,b] = equation
    let result = 0;
    switch (operator) {
        case "+":
            result = a.length + b.length;
            break;
        case "-":
            result = a.length - b.length;
            break;
        case "*":
            result = (a.length * b.length);
            break;
        case "//":
            result = Math.floor(a.length / b.length);
            break;
    }

    let dot = "" ;

    for (let i = 0; i < result; i++) {
        dot += "."
        
    }

    return dot

}

console.log(dotCalculator("..... - ..."));
