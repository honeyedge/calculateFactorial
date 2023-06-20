function calculateFactorial(number: number): number | string {
  if (number < 0) {
    return 'Err! no negative values.';
  }

  let factorial = 1;

  for (let i = 1; i <= number; i++) {
    factorial *= i;
  }

  return factorial;
}
console.log(calculateFactorial(5));
