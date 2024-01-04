// Space Complexity

function booooo(n) {
  for (let i = 0; i <= n.length; i++) {
    console.log('boooooo!');
  }
}

booooo([1, 2, 3, 4, 5, 6, 7, 2]); // s.c -> O(1) note that ignore the input

function arrayOfHiTimes(n) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr[i] = 'hi';
  }
  return arr;
}

arrayOfHiTimes(6); // s.c -> O(1)
