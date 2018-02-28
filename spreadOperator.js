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