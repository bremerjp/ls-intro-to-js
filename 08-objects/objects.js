//1.
let person = {
  name:       'Bob',
  occupation: 'web developer',
  hobbies:    'painting',
};

person.name
person['name'];

//2. All are valid keys
//3.

let myArray = {
  0: 'first',
  1: 'second',
  2: 'third',
  length: 3,
};

for (let i = 0; i < myArray.length; i += 1) {
  console.log(myArray[i]);
}

//4.
let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let keys = Object.keys(obj);
console.log(keys);

let upperKeys = keys.map(key => key.toUpperCase());
console.log(upperKeys);

//5.
let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);

//6. p, p, o, p, neither, o, p, o

//7. 
myObj.qux = 3;

//the first snippet will only log the myObj object whereas the second snippet will log myObj along with its prototype.

let objKeys = Object.keys(myObj);
objKeys.forEach(function(key) {
  console.log(key);
});

for (let key in myObj) {
  console.log(key);
}

//8.

let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

function copyObj(obj, arr) {
  let newObject = {};
  
  if (arr) {
    arr.forEach(function(key) {
      newObject[key] = obj[key];
    }); 

    return newObject;
  } else {
    return Object.assign(newObject, obj)
  }
}

let newObj = copyObj(objToCopy);
console.log(newObj); 

let newObj2 = copyObj(objToCopy, [ 'foo', 'qux' ]);
console.log(newObj2);

let newObj3 = copyObj(objToCopy, [ 'bar' ]);
console.log(newObj3);

//9.The program logs 'hi' and 'hello'

//10. Primitive values: 1, 2, "a", "b". false, null
// Objects: 4 arrays and 1 object

//11. 
let obj1 = {
  foo: { a: "hello", b: "world" },
  bar: ["example", "mem", null, { xyz: 6 }, 88],
  qux: [4, 8, 12]
};

obj1['bar'][3]['xyz'] = 606;

console.log(obj1);

//12.
// function foo(bar) {
//   console.log(bar, bar, bar);
// }

// let bar = foo;

// foo("hello");
// bar("hi");

//13.

function foo(bar) {
  console.log(bar());
}

foo(function() { return "Welcome" });    
foo(function() { return 3.1415 });    
foo(function() { return [1, 2, 3] }); 

//14. variables : hello, xyzzy, greeting, name, howdy, and foo
//    property names: a, b, c, d, 0, 1, 2
//    primitives: ' ', 1, 2, 3, 4, 5, 'Hi', 'Grace', a, b, c, d, 0, 1, 2
//    Objects: hello, xyzzy, { a: 1, b: 2, c: [3, 4, 5], d: {} }, [3, 4, 5], {}

//15. variables: bar, arg1, arg2, foo, qux, result
//    object property names: abc, def, ghi, jkl, mno, pqr, 0, 1, 2, 3
//    primitive: Hello', 1, 2, 3, 4, 5, 6, null, NaN, 'Victor', 'Antonina','abc', 'def', 'ghi', 'jkl'. 'mno', 'pqr', '0', '1', '2', '3'
//    objects: bar, [1, 2, 3, [4, 5, 6]], [4, 5, 6], obect assigned to qux