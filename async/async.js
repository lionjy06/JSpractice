'use strict';

// async & await
// async.await은 promise를 조금더 간결하고 간편하고 동기적으로 실행되는것처럼 보이게ㅐ 하는것
//  .then을 너무 계속쓰다보면 난잡해질수있음
// syntatic sugar: 기존에 존재하는것 위에 간편하게 사용할수있는 api

// 1. async
async function fetchUser() {
  // do network request about 10 sec
  //return new Promise((resolve,reject) => {
      //return 'jin' // resolve와 reject를 호출하지 않으면 promise는 pending상태에 머무르게됨
    //resolve('jin');
    return 'jin' //function앞에 async를 붙여주면 resolve나 reject없이도 바로 결과값인 jin 나오게됨
  };

// ** function 앞에 async를 입력하면 promise 키워드인 resolve와 reject기입 없이도 promise의 기능을 수행한다.



const user = fetchUser();
user.then(console.log);
console.log(user);
// 비동기적 처리를 하지않으면 10초나 걸리기 때문에 web page에 필요한 api들이 실행이 될수없다. -> 사용자는 10초 동안이나 빈페이지만 보고있어야함


// 2. await
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve,ms));
}
// 위에서 만든 promise는 정해진 시간이 지나면 resolve를 호출하는 기능을 갖는 promise임


async function getApple() {
  await delay(2000);
  return 'apple';
}
//await은 async가 function앞에 있어야지만 쓸수있는 기능이다.
//await은 delay함수가 끝날때까지 기다렸다가 apple을 반환함


async function getBanana() {
  await delay(1500);
  return 'banana';
}
// await은 async가 포함된 function안에서만 작동하며 마찬가지로 delay함수가 실행되고 banana를 반환한다

async function pickFruits() {
  const applePromise = getApple();
  const bananaPromise = getBanana();
  const apple = await applePromise;
  const banana = await bananaPromise;
  //사과 실행되는 1초 바나나 실행되는데 1초 걸려서 도합 2초의 delay가 진행되지만 두개는 병렬적으로 읽어서 실행시킬수 있기 때문에 둘을 한번에 실행시켜 delay를 최소화한다.
  return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

// 3.useful Promise APIs
function pickAllFruits() {
  return Promise.all([getApple(), getBanana()])
  .then (fruits => fruits.join(' + '));
}

pickAllFruits().then(console.log);

function pickOnlyOne() {
  return Promise.race([getApple(),getBanana]);
}

pickOnlyOne().then(console.log);