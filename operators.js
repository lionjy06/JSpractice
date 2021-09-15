'use strict';
// 1. string concatenation
console.log('my'+'cat');
// 문자열과 문자열을 더하면 이어지는 문자열이 반환된다.
console.log('1'+2);
// 문자열 1과 숫자2를 더해준 결과 12가 반환된다. 
console.log(`string literals:1+2= ${1 + 2}`);
//template literal을 사용하여 string literals:1+2라는 문자열을 출력하고 결과값으로 ${입력값}을 반환한다.
// 이때 backtick을 사용한다.
console.log('jinyoung\'s book');
// quote로 문자열을 나타낼때 특수문자를 인식시키게 하기위해서는 \(백슬래쉬)를 특수문자 앞에 적어준다.
//  \n(줄바꾸기) \t(탭)

// 2. numeric operators
console.log(1+1); //더하기
console.log(1-1); //빼기
console.log(1/1); //나누기
console.log(1*1); //곱하기
console.log(1%1); //나머지 구하기
console.log(1**1); //제곱

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter +1;
// preIncrement = counter;
// 먼저 counter라는 변수에 +1을 하고 그다음 preIncrement라는 상수(const)에 +1된 counter값을 넣어주는 것과 같은것이 preIncrement = ++counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
// preDcrement = --counter 도 있다.

const postIncrement = counter++;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);
// postIncrement = counter;
// counter = counter +1;
// 일단 counter의 값을 postIncrement에 넣은후 counter의 값을 1증가시킨다.
// 이것의 결과값은 postIncrement는 3 counter는 4라는 값을 반환한다.

// 4. Assignment operators
let x = 3;
let y = 6;
x += y; //x = x+y;와 같다.
x -= y; // x= x-y;
x *= y; // x = x*y;
x /= y; // x= x/y;

// 5. Comparison operators
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal to
console.log(10 > 6); // Greater than
console.log(10 >= 6); // Greater or equal to
// boolean  형식으로 출력된다.

// 6. logical operators: ||(or), &&(and), !(not)
const value1 = true;
const value2 = 4 < 2;
console.log(`or: ${value1 || value2 || check()}`);

function check() {
  for (let i = 0; i < 10; i++) {
    // 
  }
}
// or(||)연산자는 하나라도 true값인 순간 process가 종료됨
// check()함수 같이 무거운 즉 메모리를 많이 잡아 먹는것을 앞에다가 두게 되면 느리다. 어차피 value1 이나 value2가 true인 순간 or 연산은 process를 종료하기 때문에 무거운 것들을 두게되면 좋지않다. (or 이든 and이든 같다)

// !(not)
console.log(!value1);
// value1은 처음에 true로 입력되었는데 !value1이 되면서 true값이 not과 만나 false가 되었따. 즉 boolean값을 변환시킨다.

// 7. equality operators
const stringFive = '5';
const numberFive = 5;

// loose equlaity, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);
// 타입에 관계없이 stringFive가 '5'이고 numberFive가 5이니 둘은 같다 즉 true를 리턴한다.

// strick equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);
// 타입까지 따져서 '5'와5는 같지않다, 라는 값을 반환함. 왠만하면 === strick equality를 사용하는게 좋다

// object equality by referance
const jin1 = {name:'jin'};
const jin2 = {name:'jin'};
const jin3 = jin1;
console.log(jin1 == jin2);
// object는 referance별로 저장을 하는데 jin1과 jin2의 value값이 같더라도 메모리에 저장되는 referance가 같지 않기 때문에 false가 반환된다. 즉 서로 다른 object를 가르키게 된다
console.log(jin1 === jin2);
// 
console.log(jin1 === jin3);
// const jin3 = jin1; 을 통해 같은 referance value가 할당되어 있기 때문에 같다는 값 즉 true를 반환한다.

// 8.conditional operator: if
//  if, else if, else
const name = 'coder';
if (name === 'jin') {
  console.log('welcome, jin');
} else if (name ==='coder') {
  console.log('you are amazing coder');
} else {
  console.log('unknown');
}
// const name에서 지정해준 값에 따라 조건에 맞게 값을 할당해주는것 const name = 'jin' 일때는 특정 값 반환 또는 다른 조건일때는 다른값 반환

// 9. ternary operator: ?
// condition ? value1: value2;
console.log(name ==='jin' ? 'yes' : 'no');
// jin이라는 값이 true면 앞에 있는 yes라는 문자열을 반환하고 false라면 : 뒤에 있는 값 즉 no 라는 문자열을 반환한다. 

// 10.switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS\
const browser = "IE";
switch (browser) {
  case 'IE':
    console.log('go away!');
    break;
  case 'Chrome':
  case 'Firefox':
    console.log('love you!');
    break;
  //chrome과 firefox가 반환하는 값이 같을때는 이렇게 해줘도 된다. 
  default:
    console.log('same all!');
    break;
}
// const brower = <입력값>; 에 따라 switch에서 적용한 condition값을 반환한다.

// 11. loops
// while loop, while the condition is true,
// body code is executed
let i = 3;
while (i > 0) {
  console.log(`while: ${i}`);
  i--;
}

// do-while loop, body code is executed first,
// then check the condition.
do {
  console.log(`do while: ${i}`);
  i--;
} while (i>0);
// block을 먼저 실행하고 싶다면 do-while 을 써야하고 조건문이 맞을때만 블록을 실행하고 싶다면 while을 써야한다.

// for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
  console.log(`for:${i}`);
}
// begin은 한번 선언되고(initial값) 그 선언된 값에 따라 condition이 선언된다. 처음에는 begin값을 확인하고 condition에 할당된 값을 반환한다. 그리고 condition process가 마무리되면 그다음 step에 따라 처음 initial값이 변경되고 그값에 따라 condition값에 부합하는지 확인한다. 그과정이 condition값에 부합하지 않을때까지 반복된다.

for (let i = 3; i > 0; i = i - 2) {
  // inline variable declaration
  console.log(`inline varaible for: ${i}`);
}
// block안에 변수를 지정하는 inline varaible방식도 있다.

// nested loops
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(`i: ${i}, j: ${j}`);
  }
}
// i가0일때 j는 0에서 9까지 실행되고 i가 1일때 또 j는 0에서9까지 실행되며 그것이 i가9,j가9가 될때까지 반복된다.
//  CPU에 좋지않아 권장되지 않는다

for (i = 0; i < 11; i++) {
  if(i%2===0) {
    console.log(`number is ${i}`);
  }
}

for (i=0; i<9; i++) {
  if (i<9) {
    console.log(`number is ${i}`);
  }
  
}

