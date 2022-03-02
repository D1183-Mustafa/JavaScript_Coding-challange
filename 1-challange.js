// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

function validatePIN (pin) {
    let cntrl = 0;
    
    for (let i = 0; i < pin.length; i++) {
        if (isNaN(pin[i])){
            return false
        }else if (Number.isSafeInteger(parseInt(pin[i]))) {
            cntrl += 1;
        }
        
    }
    if (pin.length === 4 || pin.length === 6) {
        if (cntrl === 4 || cntrl === 6) {
            return true;
        }
        else {
            return false;
        }
    }else {
        return false
    }


}
