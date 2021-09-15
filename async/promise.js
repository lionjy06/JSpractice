'use strict';
// promise란? : js에서 제공하는 비동기를 간편하게 처리할수있게 도와주는 object
// 기능을 수행하다가 성공하면 메시지를 보내고 실패하면 에러메시지를 보냄

// promise is a js object for asynchronouse operation.
// 1. state: 기능을 수행하는중인지 기능을 성공한것인지 실패한 상태인지를 알아야함
//state: pending(기능을 수행중인 상태) ->  fulfilled(기능을 다 수행한 상태) or rejected(실패한 상태)
// 


// 2. producer(필요한 데이터를 제공하는 사람)와 consumer(제공된 데이터를 쓰는 사람)
//  producer vs consumer


// 2-1. producer
// when new Promise is created, the executor runs automatically.
const promise = new Promise((reslove, reject) => {
  // doing some heavy work (network, read files와 같이 시간이 걸리는 작업은 비동기적으로 처리하는게 좋다.)
  console.log('doing something');
  setTimeout(() => {
    //reslove('jin'); //어떤 작업을 수행할때 작업을 성공적으로 수행했다면 resolve라는 callback함수를 실행한다.
    reject(new Error('no newtwork'));
    // Error object를 통해서 전달 받는데 이때는 왜 error가 일어났는지 명시하는게 좋다.
  },2000);
});
// promise를 저장하는 순간 바로 executor callback함수가 바로 실행되어 doing something이 출력되었다.
// 만약 network통신을 하는 작업을 promise를 통해 만들었다면, promise를 만드는 것과 동시에 network통신을 위한 작업을 수행한다.

// **만약 네트워크 통신이 사용자가 호출했을때 동작해야 하는 작업이라면 promise는 적절하지 않다 왜냐하면 호출하지도 않았는데 자동으로 동작하기 때문이다. (불필요한 네트워크 통신이 일어날수있음)


// 2-2 consumers: then, catch, finally
promise
  .then(value => { //value의 인자는 promise가 성공적으로 작업을 수행했을때 resolve callback함수를 통해 반환받는 값으로 받는다.
    console.log(value);
  })
  .catch(error => {
    console.log(error);
  })
  .finally(() => {
    console.log('finally');
  })
// then은 promise의 작업이 정상적으로 수행이 된다면 어떤 값을 받아올때 쓰는것
// catch는 promise의 작업이 수행되지 못했을때 어떤 값을 받아올때 쓰는것
// promise작업이 종료되면 then이 호출되고 성공했다면 resolve함수 값을 받지만 실패했다면 reject함수값을 받는 catch를 호출한다
// chaining
// finally는 성공이나 실패 여부에 상관없이 작업이 종료되었다면 무조건 실행되는 작업이다.


// 3. promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000 );
});

fetchNumber
.then(num => num *2 )
.then(num => num *3 )
.then(num => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(num -1), 1000);
  });
})
.then(num => console.log(num));
// then 을 연속적으로 사용하여 다른 비동기 작업 까지 한번에 묶어서 처리할수있다.


// 4. Error Handling
const getHen = () => 
  new Promise((resolve,reject) => {
    setTimeout(() => resolve('hen'),1000);
  });
const getEgg = hen =>
  new Promise((resolve, reject) =>{
    setTimeout(() => reject(new Error(`error! ${hen} => egg`)),1000); //reject시 new Error를 통해 에러명시 해주자.
  });
const cook = egg =>
  new Promise((resolve,reject) => {
    setTimeout(() => resolve(`${egg} => friedEgg`),1000);
  });

getHen()//
.then(hen => getEgg(hen))
.catch(error => {
  return 'bread';
})
//만약 egg를 받아오지 못했을 경우 다른 식으로 처리할때는 에러 지점 다음에 .catch로 원래작업이 불가했을때 다른작업을 수행할수 있도록 해주자.
// .catch를 통해 chaining process에서 문제 생기지 않도록 한다
.then(egg => cook(egg))
.then(friedEgg => console.log(friedEgg))
.catch(console.log);
// error 발생시 .catch를 통해 error를 명시하자


