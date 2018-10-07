//any type
var power;
// Takes any and all types
power = '123';
power = 123;
// Is compatible with all types
var num;
power = num;
num = power;
//null and anything
var num;
var str;
// These literals can be assigned to anything
num = null;
str = undefined;
//:void
function log(message) {
    console.log(message);
}
//generics
function reverse(items) {
    var toreturn = [];
    for (var i = items.length - 1; i >= 0; i--) {
        toreturn.push(items[i]);
    }
    return toreturn;
}
var sample = [1, 2, 3];
var reversed = reverse(sample);
console.log(reversed); // 3,2,1
// Safety!
reversed[0] = '1'; // Error!
reversed = ['1', '2']; // Error!
reversed[0] = 1; // Okay
reversed = [1, 2]; // Okay
//union type
function formatCommandline(command) {
    var line = '';
    if (typeof command === 'string') {
        line = command.trim();
    }
    else {
        line = command.join(' ').trim();
    }
    // Do stuff with line: string
}
//tuple
var nameNumber;
// Okay
nameNumber = ['Jenny', 8675309];
// Error!
nameNumber = ['Jenny', '867-5309']; //type error
// Usage: just like any other notation
var strOrNumVar;
strOrNumVar = 123;
strOrNumVar = '123';
// Just checking
strOrNumVar = true; // Error!
