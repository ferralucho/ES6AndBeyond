const foo = function(){
    return "foo"
};

const a = "a";

const obj = {
    foo, 
    a,
    getTitle() {
        return `The title is ${this.a}`;
    }
}

console.log(obj.foo());
console.log(obj.a);
console.log(obj.getTitle());