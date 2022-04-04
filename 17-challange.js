function searchOd(arr) {
    let minValue = Math.min(...arr);
    let maxValue = Math.max(...arr);
    let result;

    for (let i = minValue; i <= maxValue; i++) {
        if(i % 2 !== 0 && !arr.includes(i)){
            result = i
        }else {
            console.log("Array içindeki tek sayılarda eksik yok.")
        }
        
    }
    return result
};

