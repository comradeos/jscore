function print(var_name) {
    document.write(var_name + "<br>");
}


// VARIABLES
let message; // a-z, A-Z, 0-9, $, _
print(message);

let myMessage;
myMessage = "Message content";
print(myMessage);

let myNumber = 23.123;
print(myNumber);

myObject = {
    name: "Petro",
    age: 32,
};
print(myObject);

// NUMBERS
print(50 + myNumber);
print(50 - myNumber);
print(50 * myNumber);
print(50 / myNumber);
print(50 % myNumber);

print(Math.round(5.54));
print(Math.round(5.14));

print(Math.ceil(5.14));
print(Math.floor(5.54));

myNumber = 1.34321;
print(myNumber.toFixed(1));

print("50" + myNumber);
print(parseInt("50") + myNumber);


// STRINGS
let myString = "Hello, world";
print(myString.toLowerCase());
print(myString.toUpperCase());

// ARRAYS
let names = ["Maria", "Bob",];
print(names[0]);
print(names[0].toLowerCase());
print(names[0].toUpperCase());

names.push("Another"); // add new element
print(names);


if (10 < 20) {
    print(true);
};

names.forEach(name => {
    print(name);
});

// ARROW FUNCTIONS
let sumArrowFunc = (a, b) => {
   print(a + b);
};

print(sumArrowFunc(2,13));

// LOOPS

for (let i = 0; i <= 10; i++) {
    if (i == 5) {
        continue;
    }

    print(i);

    if (i == 7) {
        break;
    }
}

for (let i = 0; i < names.length; i++) {
    print(names[i]);
}


let a = 10;
while(a > 7) {
    print(a);
    a--;
}