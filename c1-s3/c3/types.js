//function parameter types
var num = 123;
function identity(num) {
    return num;
}
// identity(number)
// identity('1234')
//primitve types
var num;
var str;
var bool;
num = 123;
num = 123.456;
// num = '123'; // Error
str = '123';
// str = 123; // Error
bool = true;
bool = false;
// bool = 'false'; // Error
//typed arrays
var boolArray;
boolArray = [true, false];
console.log(boolArray[0]); // true
console.log(boolArray.length); // 2
boolArray[1] = true;
boolArray = [false, false];
var name1;
name1 = {
    first: 'John',
    second: 'Doe'
};
name1 = {
    first: 'John'
};
name1 = {
    first: 'John',
    second: 1337
};
//inline type annotation - aka type without a name
var nameT;
nameT = {
    first: 'John',
    second: 'Doe'
};
nameT = {
    first: 'John'
};
nameT = {
    first: 'John',
    second: 1337
};
