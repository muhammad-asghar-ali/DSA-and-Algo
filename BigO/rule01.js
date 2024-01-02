// Worst case

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
      break;
    }
  }
  console.timeEnd('findNemo');
}

findNemo(large); // O(0) -> linear time e.g. O(1), O(10), O(1000000)
