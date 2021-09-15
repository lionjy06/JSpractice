'use strict';

// 1. object to JSON
// stringify(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple','banana']);
console.log(json);
// apple과 banana는 배열처리되어 나오지만 single quote가 아닌 double quote로 나온다. 이것은 json의 규격에 맞게 나온것이다.

const rabbit = {
  name: 'tori',
  color: 'white',
  size: null,
  birthDate: new Date(),
  jump: () => {
    console.log(`${name} can jump`);
  },
  // jump함수는 json에 포함되지 않는다.
};

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ["name","color"]); 
// rabbit이라는 object를 json화 해서 추력할때 배열 []을 이용하여 특정 key값 e.g "name","color"등 특정 키값을 입력하면 그것에 대한 결과값만 반환된다.


json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key:${key}, value:${value}`);
  return key === 'name' ? 'jin' : value;
})
// callback 함수를 이용하여 주어진 key와 value가 반환되게 설정하는데 key값이 name이면 무조건 'jin'이라는 value로 설정하고 key가 name이 아닌 다른 값이라면 주어지는 value를 반환하라.

// callback함수를 이용하면 좀더 세밀한 설정이 가능하다.


console.log(json);


// 2. JSON to object
// parse(json)
console.clear();
json = JSON.stringify(rabbit);
const obj = JSON.parse(json, (key, value) =>{
  console.log(`key:${key}, value: ${value}`);
  return key === 'birthDate' ? new Date(value) : value; 
});
console.log(obj);
rabbit.jump();
// jump라는 함수는 json만들때도 json에 포함되지 않았기 때문에 obj로 변환했을때도 jump는 포함되지 않는다.
// parse로 이용하여 json을 string으로 바꾸면 getDate와 같은 api를 이용할수 없으나 callback 함수를 이용하여 api를 이용할수 있다

// e.g 
// console.clear();
// json = JSON.stringify(rabbit);
// const obj = JSON.parse(json, (key, value) =>{ 
//   console.log(`key:${key}, value: ${value}`);
//   return key === 'birthDate' ? new Date(value) : value; 
// }); 
// key가 birthDate라면 Date라는 새로운 object를 만들것이고 key가 birthDate가 아니라면 주어진 value에 해당하는 값을 넣겠다
// 이후 obj의 key 값에 birthDate를 넣었더니 현재 시간이 뜨고 obj.birthDate.getDate(); 를 하였더니 날짜만 뜨는것을 확인 

// console.log(obj);
// rabbit.jump();

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate());
// getDate()는 현재 날짜를 가져옴.
// console.log(obj.birthDate.getDate());
// rabbit.birthday는 날짜가 나오고 obj.birthday는 날짜를 반환받지 못하는 이유는 rabbit은 json형태의 object라서 getDate() 로 반환 받지만 obj는 json에서 string으로 바뀌었기 때문에 birthDate라는 key값을 인지할수없음

// 유용한 사이트
// jsondiff.com, jsonbeautifier.org, jsonparser.org, json-validator, https://tools.learningcontainer.com/json-validator/