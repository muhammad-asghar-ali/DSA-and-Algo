// Naive
function hasPairWithSum(arr, sum) {
  const len = arr.length;

  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len; j++) {
      if (arr[i] + arr[j] === sum) {
        return true;
      }
    }
  }

  return false;
}

console.log(hasPairWithSum([6, 5, 4, 3, 2, 1], 9));

// Batter
function hasPairWithSum1(arr, sum) {
  const set = new Set();
  const len = arr.length;

  for (let i = 0; i < arr.length; i++) {
    if (set.has(arr[i])) {
      return true;
    }
    set.add(sum - arr[1]);
  }

  return false;
}

console.log(hasPairWithSum1([6, 5, 4, 3, 2, 1], 9));
