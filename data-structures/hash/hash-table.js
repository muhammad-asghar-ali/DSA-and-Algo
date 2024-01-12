// HASH TABLE

///////////////////////////// complexity ////////////////////////
// insert -> O(1)
// lookup -> O(1)
// search -> O(1)
// delete -> O(1)

// Hash-collisions -> Cons

let user = {
  age: 50,
  name: 'John',
  magic: true,
  scream: function () {
    console.log('ahhhhhh!');
  },
};

console.log(user.age); // O(1)
user.spell = 'abra kadabra'; // O(1)
console.log(user);
