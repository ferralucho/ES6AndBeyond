const numbers = [1, 2, 3, 4];

const moreNumbers = [...numbers, 5, 6];

console.log(moreNumbers);

const foo = function (a, b, c) {
    console.log("a:", a);
    console.log("b:", b);
    console.log("c:", c);
  }
  
  const bar = [1, 2, 3];
  
  foo(...bar);
  
  const baz = [5,6];
  
  foo(4, ...baz);

  const foo2 = new Set().add(1).add(2);

console.log(...foo2);

const bar2 = new Map().set("a", 1).set("b", 2);

console.log(...bar2);

//Before
function populateBucket() {
  var bucket = [];
  for (var itemCounter = 0; itemCounter < arguments.length; itemCounter++) {
      bucket.push(arguments[itemCounter]);
  }
}

function populateBucket(...items) {
  var bucket = [];
  for(item of items) {
      bucket.push(item);
  }
}

var a = [1,2,3],
    b = [4,5,6],
    merged = [];

// What used to be the following for merging arrays
merged = a.concat(b);

// Can now be written as
merged = [...a, ...b];

