// function which return a reverse of string

function reverse(str) {
  if (!str || str.length < 2 || typeof str !== 'string') {
    return 'hmm that is not good';
  }

  const backwords = [];
  const totalItems = str.length - 1;

  for (let i = totalItems; i >= 0; i--) {
    backwords.push(str[i]);
  }

  return backwords.join('');
}

function reverse2(str) {
  return str.split('').reverse().join('');
}

const reverse3 = (str) => str.split('').reverse().join('');

const reverse4 = (str) => [...str].reverse().join('');

console.log(reverse('javascript')); // O(n)
console.log(reverse2('javascript')); // O(n)
console.log(reverse3('javascript')); // O(n)
console.log(reverse4('javascript')); // O(n)
