//Sets are the collection of unique values. Any duplicate values will be ignored. 
//The values could be also a primitives or object references.

let set = new Set();
set.add(1);
set.add('1');
set.add({ key: 'value' });
console.log(set); // Set {1, '1', Object {key: 'value'}}

// Delete values
set.delete(2);

// Check size
console.log(set.size);

//Like a map, set allows to create collection by passing an array to its constructor:
let set = new Set([1, '1', { key: 'value' }]);
console.log(set); // Set {1, '1', Object {key: 'value'}}

// forEach
let set = new Set([1, '1', { key: 'value' }]);
set.forEach(function (value) {
  console.log(value);
  // 1
  // '1'
  // Object {key: 'value'}
});

// for..of
let set = new Set([1, '1', { key: 'value' }]);
for (let value of set) {
  console.log(value);
  // 1
  // '1'
  // Object {key: 'value'}
};
