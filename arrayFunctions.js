// Array-like object (arguments) to Array
function fooBar() {
    return Array.from(arguments);
  }
  
  fooBar(1, 2, 3, 5);	// [1, 2, 3, 5];
  
  // Any iterable object...
  // Set
  var s = new Set(["foo", window]);
  Array.from(s);   
  // ["foo", window]
  
  // Map
  var m = new Map([[1, 2], [2, 4], [4, 8]]);
  Array.from(m);                          
  // [[1, 2], [2, 4], [4, 8]]  
  
  // Using an arrow function as the map function to
  // manipulate the elements
  Array.from([1, 2, 3], x => x + x);      
  // [2, 4, 6]
  //Array.fill allows you to replace all the elements of an array with the passed element

var randomNumbers = [1, 5, 7, 77, 12, 3];
randomNumbers.fill('*');	// ['*', '*', '*', '*', '*', '*'];

//Array.find receives a callback and returns the first element satisfying the condition in callback

var users = [{name: 'John Doe', age: 23}, {name: 'Jane Doe', age: 25}, {name: 'Kane Doe', age: 30}];
users.find(user => user.age > 25); 	// {name: 'Kane Doe', age: 30}
