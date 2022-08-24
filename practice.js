// number one
// closure

let invokes = 5;

function invokeThis() {
    if(invokes > 0) {
        console.log("Congrats you earn the chance!"); //replace with whatever printing function
        --invokes;
    }
    else {
        console.log("Sorry you missed the chance");
    }
}

function invokeTimes(num) {
    for(let i = 0; i < num; ++i)
        invokeThis();
}

invokeTimes(6);

// number two
// currying

let stringArray = ["Australia", "Germany", "United States of America"];

function longerThan(minLength) {
    return function(string) {
        return string.length > minLength;
    }
}

console.log(stringArray.filter(longerThan(8)));

