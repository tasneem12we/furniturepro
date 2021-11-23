//ctrl+Alt+N
var x = 10; //global access
var y = 10;
console.log(x + y);

let a = 10; //block level access
let b = 20;
let c = a + b;
console.log(c);

for (var i = 0; i < 5; i++) {
    console.log(i); //0,1,2,3,4
}

console.log(i); //4/5/error

//const
const num = 100;
console.log(num);

//num=200;//error


//object -{}
const person = {
    name: "Ram",
    age: 24,
    address: {
        dno: "123",
        street: "NRT",
        city: "guntur"
    },
    contactNo: [3456789012, 5790342445]
}
//Read
console.log(person.name);
console.log(person.age);
console.log(person.address);
console.log(person.contactNo);
console.log(person.address.city);
console.log(person.contactNo[1]);

//Modify name of a person
person.name = "Sam",
    person.address.dno = 346;
//add new number
person.contactNo.push(3456127890);
person.contactNo.push(347890);
console.log(person);
//remove number from array
person.contactNo.pop();
console.log(person);


//Array - []
const colors = ["white", "red", "green"];
//colors = [];//cant reassign  const variable

colors.push("brown");
colors.push("pink");

colors[0] = "blue";
console.log(colors);

//typeof - returns type of variable
console.log(typeof (x));    //number
console.log(typeof (10.01)); //number
console.log(typeof ("hello"))   //string
console.log(typeof (person)); //object
console.log(typeof (colors)); //object
console.log(typeof (null));  //object
console.log(typeof (true));  //boolean


//function
function add(x, y) {
    return (x + y);
}

//call function
console.log(add(10, 20));

console.log(typeof (add));  //function

//var args adding
function add(...nums) {
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        result += nums[i];
    }

    return result;
}
console.log(add(10, 20));
console.log(add(10, 20, 30));
console.log(add(10, 20, 30, 40));
console.log(add(10, 20, 30, 40, 50));

//sub
function sub(x, y, ...nums) {   //rest parameter should e last
    let result = x - y; //10
    for (let i = 0; i < nums.length; i++) {
        result -= nums[i];
    }
    return result;
}
console.log(sub(20)); //NaN error 
console.log(sub(30, 20));   //10
console.log(sub(30, 20, 10)); //0
console.log(sub(30, 20, 10, 5)); //-5 

//arrow function  - ECMA script -6
//function add(x,y){
//    return x +y;
//}

const addition = (x, y) => x + y;
console.log(addition(20, 30));

//ex:2
/*function isEven(num){
    if (num % 2 == 0){
        return true;
    }else{
        return false;
    }

}*/

let n = num => {
    return num % 2 == 0 ? true : false;
}

console.log(n(6));

//spread operator(...) -ES6 - coopy one array elements into another
const shapes = [" circle", "triangle", "rectangle"];
//const newshapes = [...shapes];  copying

//inserting new shapes while copying
//const newshapes = ["cube", ...shapes]; at beg
//const newshapes = [...shapes, "cube"] at end

const newshapes = ["sphere", ...shapes, "cube"];
console.log(shapes);
console.log(newshapes);


//Destructing
//object destructing & array destructing

const { name, age, address, contactNo } = person
const { dno, street, city } = person.address;
console.log(name);
console.log(age);
console.log(address);
console.log(dno);
console.log(street);
console.log(city);
console.log(contactNo);
console.log(contactNo[0]);

const [num1, num2, num3] = person.contactNo;
console.log(num1);
console.log(num2);
console.log(num3);

//map
var numArr = [2, 3, 4, 5, 6];

function square(num) {
    return num * num;
}

var result = numArr.map(n => n * n);
console.log(result);

var cubes = numArr.map(n => n * n * n);
console.log(cubes);

//filter
var filteredValues = numArr.filter(n => n < 5);
console.log(filteredValues);
console.log(numArr.filter(n => n % 2 != 0 ? true : false));

//class

class Shape {
    constructor() { }

    area() {
        console.log("Area");
    }
}

const shape = new Shape(10, 10);
shape.area();

//inheritence
class Rectangle extends Shape {
    constructor(length, height) {
        super();
        this.length = length;
        this.height = height;
    }
    area() {
        return this.length * this.height;
    }

    getLength() { return this.length; }
    getHeight() { return this.height; }
    setLength(length) { this.length = length; }
    setHeight(height) { this.height = height; }
}
const rectangle = new Rectangle(10, 20);
console.log(rectangle.area());
console.log(rectangle.getLength());
console.log(rectangle.getHeight());
rectangle.setLength(50);
rectangle.setHeight(60);
console.log(rectangle.getLength());
console.log(rectangle.getHeight());
console.log(rectangle.area());


























































