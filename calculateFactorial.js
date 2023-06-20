function calculateFactorial(number) {
    if (number < 0) {
        return 'Err! no negative values.';
    }
    var factorial = 1;
    for (var i = 1; i <= number; i++) {
        factorial *= i;
    }
    return factorial;
}
console.log(calculateFactorial(5));
