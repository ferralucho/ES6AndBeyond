var numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90];
for(let number of numbers) {
    console.log(number)
}

// You can break out of it as well
var numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90];
for(let number of numbers) {
    if (number === 50) {
        break;
    }

    console.log(number);
}

var guests = [{name: 'John Doe', title: 'Mr'}, {name: 'Jane Doe', title: 'Ms'}];
for(let {name} of guests) {
    console.log('Hello ' + name + '!');
}