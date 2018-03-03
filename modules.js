// user.js
var localVariable = 123;  // not visible outside this file
export default function User(age) {
  this.age = age;
}; // can be imported by other files

// user-details.js
import User from 'user';
var user = new User(24);
