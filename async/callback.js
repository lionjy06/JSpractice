'use strict';

// javascript is syncrhonous;
// excute the code block in order after hoisting
// synchronous(동기적): hoisting이 된 이후부터 하나하나 순서대로 동기적으로 실행됨
// hoisting: var, function declaration들이 자동적으로 제일 위로 올라가는것
// var나 function을 어디서 선언을 하든 제일 위로 올라가고 hoisting이 되어 선언된 변수(var)나 함수(function)다음 입력된 코드들은 순차적으로 실행된다.

console.log('1');
setTimeout(() => console.log('2'), 1000);

console.log('3');
// synchronous는 정해진 순서대로 코드실행 이 된다. 즉 위의 console 예제를 보면 1,2,3이 순차적으로 실행되는것을 볼수있다.
// setTimeout은 비동기적으로 실행되는 코드이며 setTimeout을 이용하여 1,2,3 순서대로 반환하는것이 아니라 2를 1000ms(1초) 뒤에 실행시켜 브라우저에서는 1,3,2로 보이게 만들었다.

// async(비동기적): 언제 실행이 될지 알수없는 함수 
//브라우져 에서 제공하는 api로 시간이 지나면 우리가 전달한 callback함수를 실행하는것
// callback 함수란? 우리가 만든 함수를 어떤 인자값으로 다시 부를수 있는 (callback) 할수있는 함수를 callback함수라고 한다.
// 간단한 callback함수는 arrow를 사용해도 가능함


// callback

// 1. Synchronous callback
function printImmediately(print) {
  print();
}
printImmediately(() => console.log('hello'));
// 순차대로 console이  실행되어 hello가 출력되었다 

// 2. Asynchronous callback
function printWithDelay(print,timeout) {
  setTimeout(print, timeout);
}

printWithDelay(() => console.log('async callback'), 2000);
// setTimeous을 이용하여 2000ms 뒤에 실행되었다. 즉 순차적으로 실행된 synchronous가 아닌 지정된때에 실행된 asyncrohonous callback이다



// callback지옥이란 callback함수안에 또 callback함수를 호출하고 그 함수안에 또 callback함수를 호출한것과 같은 nesting을 만들어 놓는 것을 callback지옥이라고 한다.



// callback지옥 예제
class UserStorage {
  loginUser(id, password, onSuccess, onError){
    setTimeout(() => {
      if (
        (id === 'jin' && password === 'young') ||
        (id === 'coder' && password === 'academy')
      ) {
        onSuccess(id);
      } else {
        onError(new Error('not found'));
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === 'jin') {
        onSuccess({ name: 'jin', role: 'admin'});
      } else {
        onError(new Error('no access'));
      }
    }, 1000);
  }
}

const userStorage = new UserStorage();
const id = prompt('enter you id');
// prompt() api의 기능 알아보기
const password = prompt('enter your password');
userStorage.loginUser(
  id,
  password, 
  user => {
    userStorage.getRoles(
      user, 
      userWithRole => {
        alert(
          `hello ${userWithRole.name}, you have a ${userWithRole.role} role`
        );
      },
      error => {
        console.log(error)
      }
    );  
  },
  error =>{
    console.log(error);
  }
);