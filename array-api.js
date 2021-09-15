'use strict';
// 1. 
// const fruits = ['apple','banana','orange']
// const result = fruits.join(":");
// console.log(result);

// 2. 문자열을 array로 바꾸는것 (split)
// const fruits = 'apple,kiwi,banana,cherry';
// const result = fruits.split(',',2);
// console.log(result);
// ,를 기준으로 나누어 문자열이었던것을 배열로 바꿔줌
// limit은 split의 결과를 반환받는 범위 인데 2 라고 했으면 2개 까지의 범위를 지정한다.(옵션)

// 3. 주어진 배열의 순서를 거꾸로 바꾸기
// const array = [1,2,3,4,5];
// const result = array.reverse();
// console.log(result);
//console.log(array);를 해도 5,4,3,2,1로 바뀌어있다. reverse를 한순간부터 이미 array의 data order는 바뀌었음
 

// 4. make new array without the first two element
// const array = [1,2,3,4,5];

// function makeNewArray(value) {
//   return value >= 3;
// }

// const result = array.filter(makeNewArray);
// console.log(result);
// 3과 같거나 커다란 숫자만 조건에 부합하는것만 뽑아서 새로운 array를 만듬

// const result1 = array.slice(2,);
// console.log(result1);
// 2의 자리 부터 시작하여 마지막까지 포함하기 위해 마지막 자리를 비어두웠다.


class Student {
  constructor(name, age, enrolled, score){
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}

const students = [
  new Student('A',29,true,45),
  new Student('B',28,false,80),
  new Student('C',30,true,90),
  new Student('D',30,false,66),
  new Student('E',18,true,88),
];

// 5. find a studnet with the score 90 (find)
// const result = students.find((value) => value.score === 90);
// arrow function일때 한문장이면 중괄호 생략가능
// console.log(result);

// find는 찾는 값이 나올때까지 찾다가 조건에 맞는 값을 찾으면 true를 반환하고 해당 value를 보여준다.

// 6. make an array of enrolled students (filter)
// const result = students.filter((value) => value.enrolled === true); 
// students.filter(makeEnroll) 할때 makeEnroll뒤에 () 하지 않기!!



// console.log(result);

// 7. make an array containing only the students scores
//  result should be: [45,80,90,66,88]

// const result = students.map(value => value.score);
// callback함수로 전달되는인자 지금까지는 value라는 이름의 인자를 사용했지만 앞으로는 좀더 명확하게 하기위해 student와 같은 context맞는 인자를 사용하자


// callback 함수에서 리턴되어진 값들을 array로 만듬
// 이 경우 map 함수는 value => value.score만 골라서 array를 재생성;

// 8. average of score (reducer / students.length) -> reduce함수
// const reducer = (accumulator, currentValue) => accumulator + currentValue;
// const result = students.map(value => value.score);
// console.log(result.reduce(reducer)/students.length);


// 9. check if there is a student with the score lower than 50
// (some, every)

// const result = students.some((student)=> student.score < 50);
// console.log(result);
//  some을 이용하면 하나라도 조건에 맞으면 true를 반환하는것을 이용하여 50점 이하가 하나라도 있으면 true를 반환하게 하는것이다.

// const result = !students.every((student) => student.score >= 50);

// const result = students.find((value) => value.score < 50);
// console.log(result);

// 10. make a string containing all the scores (toString)
// result should be: '40,80,90,66,88'

// toString(array를 문자열로 변경)
// const result = students.map((student) => student.score);
// console.log(result.toString());

// 여러가지 복합적으로 해보기
// const result = students
// .map((student)=>student.score)
// .filter((score) => score >= 50)
// .join();
// console.log(result);

// bonus do  Q10 sorted in ascending order
// result should be: '45,66,80,88,90'
// const result = students
// .map((student) => student.score)

// .sort((a,b)=>a-b)
// .toString();
// console.log(result);
// array를 sort로 바꾸는 작업을 맨마지막에 해야 typeError가 나지않는다.