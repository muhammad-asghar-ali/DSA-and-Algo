// O(n!)
// Factorial time complexity

function factorial(n) {
  if (n <= 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

// Example usage:
const result = factorial(5); // O(n!)
console.log(result); // Output: 120

function generatePermutations(arr) {
  if (arr.length === 0) {
    return [[]];
  }

  const result = [];

  for (const element of arr) {
    const withoutElement = arr.filter((item) => item !== element);
    const permutationsOfRemaining = generatePermutations(withoutElement);

    for (const perm of permutationsOfRemaining) {
      result.push([element, ...perm]);
    }
  }

  return result;
}

const inputArray = [1, 2, 3];
const permutations = generatePermutations(inputArray); // O(n!)

console.log(permutations);
