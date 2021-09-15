'use strict';

// let aa = 2;
// const preIncrement = ++aa;

// console.log(aa);
// console.log(preIncrement);

// let bb = 3;
// const postIncrement = bb++;

// console.log(bb);
// console.log(postIncrement);

// const quiz1 = prompt('');
// if(quiz1 === '안녕'){
//   alert("안녕하세요");
// } else if (quiz1 === '잘자'){
//   alert('안녕히 주무세요');
// }

// const quiz2 = "";
// if(quiz2 === '안녕'){
//   alert("안녕~");
// } else {
//   alert('인사를 안하다니...');
// }

// const quiz3 = Number(prompt("숫자를 입력하세요"));
// if (quiz3 > 0){
//   alert('양수입니다');
// } else if (quiz3 == 0) {
//   alert('0입니다');
// } else {
//   alert('음수입니다.');
// }
// ** 숫자를 비교하기위해서는 앞에 변수에 Number를 선언해주어야 한다.

// const quiz4 = Number(prompt("숫자를 입력하세요"));
// if(quiz4 % 4 ===0){
//   alert('4로 나눌수있습니다');
// } else {
//   alert('4로 나눌수 없습니다.');
// }

// let quiz5 = Number(prompt('횟수입력'));
// while (quiz5 > 0) {
//   console.log(`javascript! ${quiz5}`);
//   quiz5--;
// }

// let i = Number(prompt('hello~!'));
// do {
//   console.log(`jinyoung ${i}`);
//   i--;

// } while(i > 0)

// const quiz6 = {name:'진영',age:28,hobby:'lol'};
// for (let key of Object.keys(quiz6)) {
//   let values = quiz6[key];
//   console.log(key, values);
// } 

let jin = {name:'진영',age : 28, weigth:'70kg',status:'single'};
for(let key of Object.keys(jin)) {
  let values = jin[key];
  console.log(key, values);
}