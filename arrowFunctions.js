const a = 2;

const multiply = function (num){
return num * a
}
console.log(multiply(5));
//You can write it like this: 
const multiplyAn = num => num * a;
console.log(multiplyAn(3));

const numbers = [1, 2, 3, 4];
const doubled = numbers.map(number => number * 2);

let evens = [1, 2, 3, 4, 5, 6, 7];
let fives  = [];
// Expression bodies
var odds = evens.map(v => v + 1);

var nums = evens.map((v, i) => v + i);
var pairs = evens.map(v => ({even: v, odd: v + 1}));

// Statement bodies
nums.forEach(v => {
  if (v % 5 === 0)
    fives.push(v);
});

// Lexical this
var bob = {
  _name: "Bob",
  _friends: [],
  printFriends() {
    this._friends.forEach(f =>
      console.log(this._name + " knows " + f));
  }
}

