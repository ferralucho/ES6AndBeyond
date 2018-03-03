var map = new Map();
map.set('spec', '2015');
map.set('year', '2015');

// use `.get()` to retrieve items
console.log(map.get('spec')); // 2015

//You can also iterate the maps

for (var [key, value] of map) {
   console.log(key + ': ' + value);
}


//Like Map, WeakMap is a collection of key/value pairs where the keys must be objects or in other words 
//they must be reference types and not value types like numbers, symbols or strings etc and the values can be arbitrary values. If there is no other reference to the key stored in the WeakMap, they can be garbage collected. It means they are good for keeping metadata around for the objects while they are still being used

var wm1 = new WeakMap(),
    wm2 = new WeakMap(),
    wm3 = new WeakMap();
var o1 = {},
    o2 = function(){},
    o3 = window;

wm1.set(o1, 37);
wm1.set(o2, "azerty");
wm2.set(o1, o2); // a value can be anything, including an object or a function
wm2.set(o3, undefined);
wm2.set(wm1, wm2); // keys and values can be any objects. Even WeakMaps!

wm1.get(o2); // "azerty"
wm2.get(o2); // undefined, because there is no value for o2 on wm2
wm2.get(o3); // undefined, because that is the set value

wm1.has(o2); // true
wm2.has(o2); // false
wm2.has(o3); // true (even if the value itself is 'undefined')

wm3.set(o1, 37);
wm3.get(o1); // 37

wm1.has(o1); // true
wm1.delete(o1);
wm1.has(o1); // false
