//Object literals have gotten a new shorthand notation.{name: name, title: title} can be condensed to {name, title}
const foo = "foo";
const bar = function () {
  return "bar";
};

const a = {foo, bar};

console.log(a);