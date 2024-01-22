/*//HOSTING
console.log(x);
console.log(call);
call();
var x=7;
function call() {
    console.log("Hello World");
}*/

//LET, VAR & CONST
/*
//let can't be re-decleared & can be updated
let lt=10;
let lt="Mou";
let lt=[10,20,30];
lt=100;
console.log(lt);

//var can be re-decleared & updated
var vr=10;
var vr="Mou";
var vr=[10,20,30];
console.log(vr);

//const can't be re-decleared & updated
const cns=10;
const cns="Mou";
const cns=[10,20,30];
console.log(cns);*/

//for-in 
/* 
let person={
    fname: "Mou",
    lname: "Das",
    age: 23,
    hobbies: ["painting", "coding"]
}
for(let key in person)
{
    console.log("key = "+key+ " -> value. person[key] = "+person[key]);
}

//for-of loop
let car=["BMW", "audi", "mahindra", "Tata motors"];
for(let X of car)
{
    console.log("X = "+X+" -> car[X] = "+car[X]);
}
*/

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


//OBJECT
/*
const obj1= {
    a:10,
    b:20,
    c:30,
    d:40,
}
const obj2= {
    ab:50,
}
Object.assign(obj1, {c:90, p:60});
console.log(obj1);

let x = Object.create(obj2);
x.ab= 900;
console.log(x);
let abc= Object.create(obj1);
abc.p=100;
abc.x=200;
console.log(abc); 
*/

/*
const pro= {
    c: 56
};

Object.defineProperties(pro, {
        st: { value:"mou"},
        ag: { value:23}
    
});
console.log(pro);
*/

/*
const pro= {
    c: 56
};
Object.defineProperty(pro, 'c',{
    value:"mou",
});
console.log(pro);
*/


/*
const val= {
    a: 10,
    b: 20,
    c: "abcdef"
};
let res=Object.entries(val);
console.log(val);
console.log(res);
*/

/*
const object1 = {  
    property1: 22,
    property2: 50,
    property3: 90
  };  
 // object2.property1 = 40;  
  const object2 = Object.freeze(object1);  
 // object2.property1 = 33;  
  console.log(object2); 
  */
 /*
  const pro= {
    p: 10,
  }
  const des=Object.getOwnPropertyDescriptors(pro);
  console.log(des.p);
  */

  /*
  const person = {
    firstname: "Mousumi",
    lastname: "Das",
    age: 23,
    city: "Raniganj",
    56: "Road",
}
console.log(Object.getOwnPropertyNames(person));
console.log(person);
*/

/*
const o1= {
    p:10,
}
const o2= {
    p:10,
}
const o3=o1;
console.log(Object.is(o1,o2));
console.log(Object.is(o1,o3));
*/

/*
const obj = {
  prop() {},
  foo: "bar",
};

// New properties may be added, existing properties
// may be changed or removed.
obj.lumpy = "woof";
obj.foo = "baz";
delete obj.prop;

const o = Object.seal(obj);

console.log(o);
console.log(o === obj); // true
console.log(Object.isSealed(obj)); // true
*/
