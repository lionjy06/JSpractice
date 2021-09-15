'use strict';
const arr1 = [1,2,3,4,5,6,7,8,9];
const arr2 = [10,11,12];
const newArr1 =  arr1.concat(arr2);
const arr3 = [1,2,4,10];



console.log(arr1);


// length: array안에든 데이터 갯수 반환 (9)
// toString: array안에든 데이터를 문자열로 변환하여 반환함 (1,2,3,4,5,6,7,8,9)
// push: array 가장 뒤에 데이터를 추가 e.g arr1.push(추가할 데이터)
// 서로 다른 array를 합칠수는 있지만 인자값으로 더해지는 array는 리스트 형태 그대로 들어간다. 

// pop: array가장 뒤에 있는 데이터를 삭제하고 삭제한 데이터를 반환한다. e.g arr1.pop()
// concat: 서로 다른 array를 하나의 array로 합칠수 있다. e.g const newArr1 = arr1.concat(arr2);
// join: 구분자를 지정해줄수 있다. e.g console.log(arr1.join(":"));을 하면 구분자 기본값인,에서 지정한 구분값인 :로 바뀌어서 데이터가 구분된다.
// slice: 범위를 구분하여 반환한다. slice(시작값(index),끝값); 시작값부터 시작하여 끝값 하나 전까지 범위를 지정한다.
// e.g console.log(newArr1.slice(2,6)); 은 [3,4,5,6] 까지 반환된다. 6의 자리의 value는 7이지만 하나 전 value인 6까지 범위를 잡는다

// reverse: value의 순서를 역순으로 바꾼다. console.log(newArr1.reverse()); 라고하면 1,2,3,4,...11,12 이었던 값이 12,11,....,2,1 순으로 바뀜

// sort: array를 정렬하기 위해서 사용한다. sort([compareFn])으로 compareFn없이 그냥 sort만 사용했을 경우 맨 앞자리의 크기만 보고 정렬 한다.
// e.g const arr3 = [1,2,4,10]를 console.log(arr3.sort()); 로한다면 [1,10,2,4] 순으로 맨앞자리 1로시작하는게 앞으로오고 2 와 4가 온다. 그래서
// console.log(arr3.sort(function(a,b) {
//   return a - b;
// })) 를 해주어 1 부터 10까지 큰순으로 한다. 만약 역순으로 하고싶다면 return b - a;를 해주면된다.

// sort 함수로 객체정렬하기
// const arr4 = [
//   {name:'jin', price:500},
//   {name:'young', price:1000},
//   {name:'yang', price:1500}
// ];

// console.log(arr4.sort(function(a,b){
//   return b.price - a.price;
// }));
// key와 value로 이루어진 object에서 기존의 return a - b;에서 작은순 부터 큰순으로 하는것을 a.특정키값 - b.특정키값을 하면 특정 키의 value의 오름차순으로 정렬된다. 이경우 a.price - b.price;를 하였으니 price를 기준으로 작은순부터 큰순으로 분류될것이다 


// splice: 중간에 값을 넣거나 삭제하거나 할수있다. e.g console.log(newArr1.splice(index,index 위치로 부터 지우고 싶은 범위, 추가하고자 하는데이터 contents));

// indexOf: 찾고자 하는 value(data)의 위치를 앞에서 부터 반환해준다. newArr1.indexOf('찾고자 하는 value'); 
// 만약 찾고자 하는 value가 array안에 없다면 -1을 반환

// lastOfIndex: 찾고자 하는 value(data)의 위치를 뒤에서 부터 반환해준다. newArr1.lastOfIndex('찾고자 하는 value');
// 만약 찾고자 하는 value가 없다면 -1을 반환

// includes: 찾고자하는 value가 array안에 있는지 확인하여 있으면 true를 없으면 false를 반환한다. e.g newArr1.includes('찾고자하는 value');

//unshift: 앞에서 부터 넣고자 하는 data를 삽입한다. e.g newArr1.unshift('넣고자 하는 data');
//shift: 앞에서 데이터를 뺀다. e.g newArr1.shift();

// every: array 안에 있는 값들이 특정조건을 만족하면 true를 반환하고 하나라도 만족하지 못하면 false를 반환함.
// some: array 안에 있는 값들이 특정조건을 하나라도 만족하면 true를 반환하고 하나도 만족하지 못하면 false를 반환함.
 


// e.g every
// arr2.every(function(value) {
//   if (value >= 10) {
//     console.log('ok');
//     return true;
//   } else {
//     console.log('no')
//     return false;
//   }

// })

// function trueOrFalse(value) {}
//   if (value < 10) {
//     console.log('true')
//     return true;
//   } else {
//     console.log('false');
//     return false;
//   }
// }

// newArr1.every(trueOrFalse);

// arr2.every(function(value) {
//   if (value >= 10) {
//     console.log('ok');
//     return true;
//   } else {
//     console.log('no')
//     return false;
//   }

// e.g some
// function trueOrFalse(value) {
//   if (value < 10) {
//     console.log('abc')
//     return true;
//   } else {
//     console.log('false');
//     return false;
//   }
// }

// arr1.some(trueOrFalse);

// forEach: 데이터가 callback함수를 한번씩 실행한다.
// e.g 변수명.forEach(value,index(opt),array(opt)) => callback function(value,index(opt),array(opt));
// e.g arr1.forEach(value) => console.log(value);
// index와 array는 opt(옵션)이니 만큼 생략가능 하지만 value는 필수요소라서 반드시 써야한다.

// map: 기존에 존재하는 array에서 조건에 맞는 새로운 array를 만들때 사용됨
// e.g map
// const map1 = arr2.map(i => i*2);
// console.log(map1);

// filter: 기존에 존재하는 array를 특정조건에 맞추어 조건에 맞는 value들만 모아서 새로운 array를 생성.
// e.g filter (arrow)
// const word = ["jin","young","yang","definition","battlecruiser","kellog"];
// const result = word.filter(word => word.length > 6);
// console.log(result);

// e.g filter(callback)
// const word = ["jin","young","yang","definition","battlecruiser","kellog"];
// function isBigEnough(value) {
//   return value.length >= 6;
// }    
// const filterExam = word.filter(isBigEnough);
// console.log(filterExam);


// reduce: 기존에 존재하는 데이터의 누적값과 현재값을 더한 결과값.

// e.g reduce (arrow)
// const reducer = (accumulator,currentValue) => accumulator + currentValue;
// console.log(arr2.reduce(reducer)); 이렇게하면 arr2에 있던 모든 데이터값을 더한 33이나온다.
// console.log(arr2.reduce(reducer,100)); 이렇게하면 기존값 더하기 100을 더한값을 반환한다.

// e.g reduce(callback)
// function cde(accumulator,currentValue) {
//   return accumulator + currentValue ;
// }

// const reduceExam = arr2.reduce(cde);
// console.log(reduceExam);