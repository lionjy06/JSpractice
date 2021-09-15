'use strict';
// function
// 하나의 함수는 하나의 기능만 하게 하는게 좋다.

//1. funtion declaration
// function name(para1,para2) {body(logic) return;}
// 함수의 이름은 동사형으로 짓는다 (doSomething, command, verb)
// function is object in JS
function printHello() {
  console.log('Hello');
}

printHello();

function log(message) {
  console.log(message);
}

log('Heelo@');
log(123);

//2. parameters
// primitive parameters: passed by values
//  object parameters: passed by referance
function changeName(obj) {
  obj.name = 'coder';
}

const jin = { age: 26};
changeName(jin);
console.log(jin);
// const jin에서 name:jin으로 선언했으나 changeName(jin);을 사용했을때 const jin의 referance가 가르키는 jin이 function이 갖고있는 coder 라는 값으로 변경되었다.
// chageName 함수를 선언했을때 인자값으로 name을 받아 함수를 사용할때 name이라는 parameter를 쓰면 const에서 선언한 name:<이름>에서 <이름>만 함수에서 선언한것으로 바뀐다. 하지만 const jin에서 name이 아닌 다른 parameter를 사용하면 함수에서 사용된 parameter 즉 obj.name = 'coder'말고 const에서 선언한 parameter도 value로 반환된다. 

//3. default parameter (added in ES6 )
function showMessage(message,from = 'unknown') {
  
  // from을 지정해주지 않았을시 default값으로 반환되는 값을 지정할수있음
  console.log(`${message} by ${from}`);
}

showMessage('hi');
// message parameter는 hi로 잘 출력되지만 from부분은 값을 넣어주지 않았기 때문에 undefine이 된다.

//4. Rest parameters (added in ES6)
function printAll(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }

  for (const arg of args) {
    console.log(arg);
  // for문을 간단하게 만든형태로 of를 이용하여 args에 있는 console.lof(arg)를 통해 출력한다.
  // python의 for i in range()와 비슷하다고 보면된다.
  }
  args.forEach((arg) => console.log(arg));
  // args를 forEach를 활용하여 하나하나 console.log로 출력시킨다.
}
// ...args는 배열형태로 전달된다.

printAll('dream','coding','ellie')
// dream,coding,ellie라는 3개의 배열이 전달된다. 그래서 for문을 통해 args.length즉 배열의 갯수만큼 loop돌면서 조건을 반환(이경우 에는 console.log(args.[i]))한다.


//5. local scope: 밖에서는 안을 볼수없지만 안에서는 밖을 볼수있다. (= 지역은 전역변수에서 선언된것을 사용할수있으나 전역에서는 지역에서 선언한 지역변수를 사용할수없다.)
let globalMessage = 'global'; //global variable
function printMessage() {
  let message = 'hello';
  console.log(message); //local variable
  console.log(globalMessage);
  function printAnother() {
    console.log(message);
    let childMessage = 'hello';
  }
}
// printAnther에서 선언한 childMessage는 printMessage 에서 사용할수 없다. 왜냐하면 printAnother은 안(지역)이고 printMessage는 밖(전역)이기 때문이다.
// 중첩된 함수에서 부모함수는 자식함수의 변수를 사용할수없다!!

printMessage();
// 전역변수(global scope)에서 선언된 globalMessage = 'global'은 아무대서나 접근가능 즉 지역(block)에서도 접근이 가능하다. 그래서 전역변수로 선언한다음 block안에서 console.log(globalMessage)를 해도 global이 출력되는것을 확인할수 있다.

// 지역에서 선언한 지역변수는 전역(밖)에서는 사용할수없다.

//6. Return a value
function sum(a,b) {
  return a + b;
}
const result = sum(1,2); //3
console.log(`sum: ${sum(1,2)}`);
// const result에서 sum 함수에서 만든 기능을 가져와서 사용하였다.

// 7. Early return, early exit
// bad 
function upgradeUser(user) {
  if (user.point > 10) {
    //  10점이상일때 작동되는 로직...
  }
}
// ~할때 ~해라 같이 블록안에서 조건문을 계속 실행하게되면 가독성이 떨어진다.

// good
function upgradeUser(user) {
  if (user.point <= 10) {
    return;
  }
  // 10점 이상일때 작동되는 로직...
}
// 10점 이하 즉 조건에 맞지않으면 바로 return을 실행하여 process를 종료시키고 조건에 맞는것들만 빠르게 로직에 맞추어 실행하는것이 좋은 코드이다.


// function expression
const print = function () { //function에 이름을 부여하지 않는것을 anonymous function이라고 한다
  console.log('print');
};

print();
const printAgain = print;
printAgain();

const sumAgain = sum;
console.log(sumAgain(1,3));

// 이미 만들어둔 함수(sum)에 const sumAgain = <이미 만들어둔 함수>; 를 입력하면 만들어둔 함수의 기능을 사용할수있다.
// function declaration은 hoisting이 가능해서 어디서 함수가 선언되기도 전에 값을 넣어도 어디서든 선언만 했으면 가장 위로 올려 함수를 사용할수있게 된다.



// 2. callback function usingfunction expression
function randomQuiz (answer, printYes, printNo) {
  if (answer === 'love you') {
    printYes();
  } else {
    printNo();
  }
}
// 정답을 담당하는 answer parameter와 정답에 따라 조건을 달리하는 printYes printNo라는 함수를 불러 사용하는것을 callback 이라고 한다.
// callback function이 parameter로 사용되어 조건에 따른 로직으로 사용될수있다.


// anonymous function
const printYes = function() {
  console.log('yes');
}

// named function
// - better debugging in debugger's stack traces
// - recursions
const printNo = function print() {
  console.log('no!');
}

randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

//3. arrow function
// always anonymous


const simplePrint = () => console.log('simplePrint!');
const add = (a,b) => a + b;
// const <변수명> = (para1,para2) => logic

const simpleMultiply = (a, b) => {
  // 복잡한 작업
  return a * b;
}
// block을 사용했으면 return키워드를 이용해서 return을 적용

// IIFE: Immesdiately Invoked Function Expression
(function hello() {
  console.log('IIFE');
})();
// 선언과 동시에 호출하려면 함수 앞,뒤를 괄호로 묶고 바로 다음에 (); 하면 바로 호출된다.

// function calculator(command, a, b)
// command: add, subtract, divide, multiple, remainder



