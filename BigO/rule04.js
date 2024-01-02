// Drop non Dominants

function printAllNumbersThenAllPairSums(numbers) {
  console.log('these numbers: ');
  numbers.forEach((number) => {
    console.log(number);
  });

  console.log('these sum: ');
  numbers.forEach((num1) => {
    numbers.forEach((num2) => {
      console.log(num1 + num2);
    });
  });
}

printAllNumbersThenAllPairSums([1, 2, 3, 4, 5]); // O(n + n^2) => O(n^2)
