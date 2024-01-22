//FUNCTION 

/*
let a= 20;

function callme() {
    let a =200;
    console.log(a);
}
callme();
*/

/*
let a= 20;

function callme() {
    console.log("a = "+a);
     a =200;
    return 2*a;
}
console.log(callme());
*/

/*
function scope() {
    let a=20;
    const f = () => {
        console.log(a);
    };

    a=300;
    f();
}

scope();
*/
/*
const f = () => {
    console.log(a);
};

//let a=50;
function scope() {
    let a=20;
    a=300;
    f();
}

scope();*/
/*
let a=100;
function callme() {
    let f = () => {
        console.log(a);
    }
    //let a=90;
    return f;
}
//a=60;
callme()();
*/

/*
if(true) {
    let a=20;
    var b=30;
    console.log(a, b);
}
console.log(b);
console.log(a);
*/

/*
console.log(b);
function callme() {
    if(true){
        let a= 30;
        var b= 90;
        console.log(a, b);
    
    }
    console.log(b);
    console.log(a);
}
if(true) {
    let a=30;
    var b=90;
    console.log(a+b);
}
console.log(b);
callme();
*/

/*
function abc(...nums) {
    console.log(abc);
}
let r1=abc(10,20,30);
*/
/*
let x= ((a,b) => { return a+b })(3,4);

//let x=sum(3,4);
console.log(x);
*/


//call(), apply(), bind()
/*
const student1 = {
    firstname: "Mousumi",
    lastname: "Das"
}

const printname= function(age, phn) {
    console.log(this.firstname +" "+ this.lastname +" "+ age +" "+ phn);
}

printname.call(student1, 23, 9090909090);                  //CALL
printname.apply(student1, [23, 9090909090]);               //APPLY
let details= printname.bind(student1, 23, 9090909090);     //BIND **

console.log("A");
console.log("A");
console.log("A");
console.log("A");
console.log("A");
console.log("A");
console.log("A");

details();              //** BIND


/*
const person1 = {
    firstname: "Mousumi",
    lastname: "Das",
}
const person2 = {
    firstname: "Chandan",
    lastname: "Das",
}
const person3 = {
    firstname: "Priyanshu",
    lastname: "Das",
}
const person4 = {
    firstname: "Puspa",
    lastname: "Das",
}
const print = { printname: function(city, pin) {
        console.log(this.firstname+" "+this.lastname+" "+city+" "+pin);
    }
}
print.printname.call(person1);
print.printname.call(person2, "Raniganj",713346 );
print.printname.apply(person3);
print.printname.apply(person4, [ 897876, "Asansol"]);
let abc1 = print.printname.bind(person2, "Raniganj",713346 );
let abc2 = print.printname.bind(person1, "Raniganj",713346 );

abc1();
abc2();
*/


//this VALUE IN ARROW FUNCTION 
/*
const arrow= {
    a: 10,
    b: ()=> {              //method
     console.log(this);
    }
}

arrow.b();
*/
