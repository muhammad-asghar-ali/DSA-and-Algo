const strings = ['a', 'b', 'c', 'd']; // 4*4 = 16 bytes

strings[0]; // O(1)
// push
strings.push('e'); // O(1)

// pop
strings.pop(); // O(1)

// unshift
strings.unshift('x'); // O(n)

// splice
strings.splice(2, 0, 'y'); // O(n)

