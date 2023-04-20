function calculateValue(num) {
    if (num === 0) {
        return 0;
    } else if (num % 2 === 0) {
        return num * 2;
    } else if (num % 3 === 0) {
        return num * 3;
    } else {
        return num * 5;
    }
}

module.exports = {
    calculateValue
}

//console.log(calculateValue(6))