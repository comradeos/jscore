function print(variable) {
    document.write(variable + "<br>");
}


// VARIABLES
var message; // a-z, A-Z, 0-9, $, _
print(message);

var myMessage;
myMessage = "Message content";
print(myMessage);

var myNumber = 23.123;
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
