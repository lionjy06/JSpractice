'use strict';

// Array

// 1. declaration
const arr1 = new Array();
// 배열또한 obj를 만들듯이 new라는 키워드를 이용하면 된다.
const arr2 = [1,2];
// 대괄호를 이용해서 값을 넣으며 선언할수있다.

// 2.  Index position
const fruits = ["apple","banana"];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]); //apple만 가져오는 방법
// obj에서는 변수['key']를 하면 key에 해당하는 value를 가져올수 있듯이 배열도 해당자리에 있는 value를 받아올수있음
console.log(fruits[fruits.length -1]);
// 마지막 값을 가져오기 위해서는 변수명.length -1을 하면된다.

// 3. looping over and array
// print all friuts

console.clear();
for (let i of fruits) {
  console.log(i);
}

// for (let i = 0; i < fruits.length; i++) {
//   console.log(i);
// }

fruits.forEach((i) => console.log(i));
// forEach 함수는 한줄로 표현하는 arrow가 가능하고 변수명.forEach((value,index) => console.log(value,index));
// index를 출력하고 싶지않으면 그냥 지워도된다.

// 4. addition, deletion, copy
// push: add an item to the end
fruits.push("strawberry","peach");
console.log(fruits);
// push 는 array의 뒤에서부터 원하는 값을 추가한다 

fruits.pop();
console.log(fruits);

// pop: remove an item from the end
// 뒤에서 부터 빠짐

// unshift: add an item to the beggining
fruits.unshift("kiwi","pale");
console.log(fruits);
// 앞에서 부터 추가

fruits.shift();
console.log(fruits);
// 앞에서부터 뺀다


// note! shift, unshift are slower than pop, push
// 기존에 있는 데이터의 움직임 없이 뒤에서만 추가하면 되는 push 삭제하는 pop과는 달리 앞에서 부터 추가,삭제 하기 위해서는 기존의 데이터를 전부 해주어야한다. 배열의 길이가 길면 길수록 더 느려진다.

// 가능하면 pop과  push 가 더 좋은 방법이다.
console.clear();
console.log(fruits);

fruits.splice(1,2,"blueberry");
console.log(fruits);
// 변수명.splice(index 즉 들어가고싶은 자리eg(2 라고하면 3번째 자리에 들어가서),들어가고 싶은 자리로 부터 없에고 싶은 범위(3 이라고 하면 들어가고 싶은자리에서 지정한 2부터 4개를 지운다),넣고싶은 데이터);
// 변수명
// index를 지정하고 몇개를 지우고 싶은지 언급하지 않으면 index부터 뒤에 있는 모든 데이터를 삭제한ㄷ.

// combine two arrays
const fruits2 = ["orange","clementine"];
const newFruits = fruits.concat(fruits2);
// const 새로운 변수 =  변수1.concat(변수2);는 변수1의 array 변수2의 array를 합쳐서 새로운 변수에 변수1의 array와 변수2의 array가 할당됨 
console.log(newFruits);


// 5. searching
// find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('blueberry'));
// 변수명.indexOf('value'); 는 변수에 할당되어있는 특정 value의 index자리값을 반환한다. 
// indexOf에 없는 value를 입력하면 -1을 반환한다.
// 앞에서 부터 찾은 value 값을 return

console.log(newFruits.includes('durian'));
// 변수명.includes('value')는 변수에 특정 value 가 있는지 없는지 boolean타입으로 반환함 
// durian은 없으므로 false로 return된다.

// lastIndexOf
console.clear();
newFruits.push('apple');
newFruits.splice(2,0,'apple');
console.log(newFruits);
console.log(newFruits.lastIndexOf('apple'));
// lastIndexOf는 만약 같은 value값이 있다면 뒤에서 부터 먼저 찾아진 value값을 return한다.


// 숙제
// 배열이 선언된 곳으로 가서 처음부터 array안에는 있는 기능등을 찾아보고 해보자.