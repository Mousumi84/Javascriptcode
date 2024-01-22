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
