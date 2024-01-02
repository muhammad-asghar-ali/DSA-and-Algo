const nemo = ['nemo'];
const everyone = [
  'dory',
  'bruce',
  'marlin',
  'nemo',
  'gill',
  'bloat',
  'nigel',
  'squirt',
  'darla',
  'hank',
];
const large = new Array(1000000).fill('nemo');

function findNemo(array) {
  console.time('findNemo');
  for (let index = 0; index < array.length; index++) {
    if (array[index] === 'nemo') {
      console.log('Found Nemo!');
    }
  }
  console.timeEnd('findNemo');
}

findNemo(large); // O(0) -> linear time e.g. O(1), O(10), O(1000000)

const boxes = [0, 1, 2, 3, 4, 5, 6];
function logFirstTwoBoxes(boxes) {
  console.log(boxes[0]); // O(1) -> constant time
  console.log(boxes[1]); // O(1) -> constant time
}

logFirstTwoBoxes(boxes); // O(2) -> constant time

// performance object, which is typically available in a browser environment
// const nemo = ['nemo'];

// function findNemo(array) {
//   const t0 = performance.now();
//   for (let index = 0; index < array.length; index++) {
//     if (array[index] === 'nemo') {
//       console.log('Found Nemo!');
//     }
//   }
//   const t1 = performance.now();
//   console.log('Call to find nemo took ' + (t1 - t0) + ' ms');
// }

// findNemo(nemo);
