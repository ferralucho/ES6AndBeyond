//Destructuring

//Destructuring allows binding using pattern matching, with support for matching arrays and objects. 
//Destructuring is fail-soft, similar to standard object lookup foo["bar"], producing undefined values when not found.
//Array destructuring gives a quicker and more fine-grained approach to interacting with elements in an array
const foo = ["one", "two", "three", "four"];

const [a, b, c] = foo;
console.log([a, b, c]);
console.log(a + b + c);

const [x, , z] = foo;

console.log(x + z);

const [, , p] = foo;

console.log(p);

//Object destructuring is similar to array destructuring but uses key names to do the destructuring.
const fooDes = {
    g: "1",
    m: "2",
    p: "3"
};
const {
    g,
    m
} = fooDes;

console.log(g + m);

const {
    g: baz
} = fooDes;
console.log(baz);

let funcExam = () => {
    let foo = {
        a: "1",
        b: "2",
        c: "3"
    };

    const computed = "d";

    foo[computed] = "4";

    // Destructure computed property
    const {
        [computed]: bar
    } = foo;

    console.log(bar);

    const baz = {
        w: {
            x: "5",
            y: "6"
        }
    };

    // Notice the overloaded ":" for nesting
    const {
        w: {
            x: z
        }
    } = baz;

    console.log(z);
}

funcExam();

arrObjectDest = function () {
    const foo = {
        a: [{
            b: "2"
        }, {
            c: ["3", "4"]
        }]
    };

    const {
        a: [{
            b: x
        }, {
            c: [y, z]
        }]
    } = foo;

    console.log(x)
    console.log(y)
    console.log(z)
};

arrObjectDest();


spreadArrays = function () {
    const foo = [1, 2, 3, 4, 5];

    const [a, b, ...cde] = foo;

    console.log(cde);

    // Can be used in other patterns
    const [w, , ...[, , z]] = foo;

    console.log(z);
}
