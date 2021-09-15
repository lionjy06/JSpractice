'use strict';
// object

// 1. literals and properties
const obj1 = {}; //중괄호{}를 이용해서 object를 만드는 것을 object literal 이라고 한다.
const obj = new Object(); // new를 사용해서 만드는 것을 object constructor이라고 한다.
function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const jin = {name:'jin',age:28}; //object literal
print(jin);

jin.hasJob = true;
console.log(jin.hasJob);

delete jin.hasJob;
console.log(jin.hasJob);

// hasJob이라는 제대로 선언해주지 않았음에도 불구하고 js의 동적인 특성탓에 바로 true라는 값을 반환하였다
// 그리고 delete jin.hasJob을 해주자 undefine이 떳다.


// *** object는 ket와 value의 집합체이다. === object = {key:value};

//  computed properties
console.log(jin.name);
console.log(jin['name']);
// object는 name이라는 property를 통해서 데이터(value)를 받아올수도 있고 key값을 string형태로 입력하여 value를 호출하는것도 가능한데
//  변수명['key'] 를 통해 변수에 할당된 value를 key를 통해 가져올수있다. -> []을 이용할거면 string type으로 key를 작성해야함!!

jin['hasJob'] = true;
console.log(jin.hasJob);

function printValue(obj, key) {
  console.log(obj[key]);
}

printValue(jin, 'name');
printValue(jin, 'age');
// 어떤키가 입력될지 모르는 상황 즉 사용자가 키를 입력했을때 반응 하기에 좋은 형태로 obj[key]를 이용한다. 

// 3. property value shorthand: class와 같이 template형태이다.
const person1 = {name: 'bob', age: 2};
const person2 = {name: 'steve', age: 3};
const person3 = {name: 'dave', age: 4};
const person4 = new Person('jin',28);

console.log(person4);


// 4. constructor function

// 순수하게 obj를 만들기 위해서 만들어지는 함수들은 시작할때 대문자로 시작한다.
// return대신 this를 사용한다
function Person(name,age) {
  // return {
  //   name:name,
  //   age:age,
    // 이와 같이 key와 value가 같다면 그냥 name, age, 으로 해도 무관하다.
    // name,
    // age,
    // return
  this.name = name;
  this.age = age;
};

// 5. in operator: property existence check (**key in obj)
console.log('name' in jin);
// 정의한 키가 있다면 true를 반환해준다. 
console.log(jin.random );
// 정의하지 않은 키를 써본다면 undefine이 반환된다.
console.log('money' in jin );
// in operator를 사용했을때 key가 obj안에 없다면 false를 반환한다.

// 6. for..in vs for..of
// for (key in obj)
console.clear();
for (let key in jin) {
  console.log(key);
}
// for in을 사용할때 변수를 선언해주어야 한다. let key선언을 통해 해보도록 하자.
// for in 은 변수안에있는 key값들을 하나씩 호출해준다.

// for (value of iterable)
const array = [1,2,3,4,5];
for(let value of array) {
  console.log(value);
}

// for of는 for <let value명> of 변수를 하면 변수에 담긴 value들이 반환된다.
// for in은 key값을 반환받을때 for of 는 value값을 반환받을때 사용한다.

// 7. fun cloning
// obj.assign(dest, [obj1,obj2,obj3...])
const user = { name:'jin', age:28};
const user2 = user;
user2.name = 'coder';
console.log(user.name);
// cloning을 통해서 만든 변수는 자신의 value가 변경될때 원본의 value도 변경시킨다.
// 원래 user.name은 jin이었는데 user2를 user로 부터 클론 받아 만들고 user2의 name에 대한 value를 coder로 바꾸자 user.name이 coder로 바뀌어있다.

// old way
const user3 = {};
for (let i in user) {
  user3[i] = user[i];
}
// 텅빈 변수를 생성하고 그안에 클로닝을 한다.
console.clear();
console.log(user3);

// new way
const user4 = Object.assign({},user);

console.log(user4);

// another example
const fruit1 = {color:'red'};
const fruit2 = {color:'blue', size:'big'};
const mixed = Object.assign({},fruit1,fruit2);
console.log(mixed.color);
console.log(mixed.size);
// fruit1과 fruit2로 부터 클로닝을 받았지만 색은 fruit2의 값을 받았다.
// 뒤에 있는 소스가 앞에있는 소스의 value를 덮어쓴다 eg. fruit1의 red가 fruit2의 blue에 의해 덮어  씌워졌다