// Log all pairs of array

const boxes = ['a', 'b', 'c', 'd', 'e'];

function logAllpairsOfArray(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      console.log(array[i], array[j]);
    }
  }
}

logAllpairsOfArray(boxes); // O(n^2) -> Quadratic Time
