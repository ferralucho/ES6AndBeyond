//Object literals have gotten a new shorthand notation.{name: name, title: title} can be condensed to {name, title}
const foo = "foo";
const bar = function () {
  return "bar";
};

const a = {foo, bar};

console.log(a);

//Default parameter values
//Before
function greet(greet, name) {
  greet = greet || 'Hi';
  name = name || 'John Doe';

  console.log(greet + ' ' + name);
}

function greet(greet='Hi', name='John Doe') {
  console.log(greet + ' ' + name);
}

