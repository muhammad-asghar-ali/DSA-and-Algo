// Remove Constant
function printFirstItemThenFirstHalfThenSayHi100Times(items) {
  console.log(items[0]);

  let middleIndex = Math.floor(items.length / 2);
  let index = 0;

  while (index < middleIndex) {
    console.log(items[index]);
    index++;
  }

  for (let i = 0; i < 100; i++) {
    console.log('hi');
  }
}

// O(1 + n/2 + 100) ->  O(n/2 + 101) => O(n + 1) -> O(n)
