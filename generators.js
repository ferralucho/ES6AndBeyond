// const foo = function* () {
//   console.log("foo");
// }
   // bar is now an instance of the generator and the console.log has never been run.
  //const bar = foo(3);
  // outputs "here" 
  //{ value: undefined, done: true }
  //done means that the generator doesn't have any more code to execute.
  //bar.next();

  const foo = function* (x) {
    yield x;
  }
  
  const bar = foo(3);  
  console.log(bar.next());  
  console.log(bar.next());

  const foo2 = function* (x) {
    const y = x + (yield x);
  
    yield y;
  }
  
  /*
  A yield statement tells the generator to stop executing and return the following value. You can 
  have yield statements without a return value. The generator will return done: true on the subsequent call 
  to next after the last yield statement 
  */
  const bar2 = foo2(5);  
  console.log(bar2.next().value) // outputs from 'yield x'  
  console.log(bar2.next(8).value) //outputs 'yield y' of '<x=5> + <yield x=8>'

/* What happens when we hit the first yield is we pass out x as value. 
The yield x statement then becomes whatever is passed into .next() x is still 5 but yield x is now 8.
Generators can be used with for..of loops for iterating through all of the yield statements */

const foo3 = function* (x) {
  yield x + 1;
  yield x + 2;
  yield x + 3;

  // Any return statement here would be ignored by the for..of loop
}

for (let y of foo3(6)) {
  console.log(y);
}
//In the for..of the variable Y is the result of the yield statements