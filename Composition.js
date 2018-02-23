const objs = [
  { a: 'a', b: 'ab' },
  { b: 'b' },
  { c: 'c', b: 'cb' }
];

//Array aggregation:
const collection = (a, e) => a.concat([e]);
const a = objs.reduce(collection, []);

console.log( 
  'collection aggregation',
  a,
  a[1].b,
  a[2].c,
  `enumerable keys: ${ Object.keys(a) }`
);

//RESULT: collection aggregation
//[{"a":"a","b":"ab"},{"b":"b"},{"c":"c","b":"cb"}]
//b c
//enumerable keys: 0,1,2

Concatenation
const c = objs.reduce(concatenate, {});

const concatenate = (a, o) => ({...a, ...o});

console.log(
  'concatenation',
  c,
  `enumerable keys: ${ Object.keys(c) }`
);

// concatenation { a: 'a', b: 'cb', c: 'c' } enumerable keys: a,b,c

//Delegation
const delegate = (a, b) => Object.assign(Object.create(a), b);

const d = objs.reduceRight(delegate, {});

console.log(
  'delegation',
  d,
  `enumerable keys: ${ Object.keys(d) }`
);

// delegation { a: 'a', b: 'ab' } enumerable keys: a,b

console.log(d.b, d.c); // ab c
