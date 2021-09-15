// 바닐라js 작성시 'use strict'; 를 입력해주고 시작하는게 좋음
// use strict를 선언해주지 않으면 값이 할당되어 있지 않은 변수에 값을 넣어도 문제되지않음 그래서 use strict를 선언해주고 변수할당시 let a; 그다음 a라는 변수에 값을 할당할수있다.
// console.log("문자열") 은 문자열을 브라우저에서 보여주는 브라우저 api이다 즉 js에서의 문법은 아님


// 입력 연산 출력이 프로그래밍에 제일 중요하다.
'use strict';

// 2. variable rw(read and write. write이 가능하다는 말은 수정이 가능하다는 말임)
// js에서는 변수에 값을 할당하기전 변수를 define하는데 그것을 let을 통해서 한다. let <변수명>;

let globalName = 'global name';
{
  // {}안에 선언된 명령어는 block밖에서는 보이지 않는다. 이것을 block scope라고 하며 block밖에서 선언되는 것들은 global scope라고 한다. global scope는 어느곳에서나 접근이 가능하다. 즉 block scope안에 선언된 명령어는 block 레벨에서만 접근이 가능하지만 global scope는 어디에서도 접근이 가능하다
  let name = 'jinyoung';
  console.log(name);
  name = 'hello';
  console.log(name);
}
console.log(name);
// 위 console.log를 찍어도 아무 것도 보이지 않는 이유는 name이라는 변수는 block 안에서 선언됫었기 때문에 밖에서는 변수를 확인할수없기 때문
console.log(globalName);

// var hoisting이란 어디에 선언했던지 상관없이 제일 위로 끌어 올려주는것 (move declartion from bottom to top), 또한 var는 block scope가 없다.

// 3. constant: 한번할당하면 값이 절대 바뀌지 않는 값을 constants라고 한다. r( read only. 즉 수정이 불가능하다는 말임)
// Note!!
// immutable data types: primitive types, frozen object(eg. object.freeze())
// mutable data types: all object by default are mutable in JS (기본값 즉 default object는 따로 지정해주지 않으면 mutable이다.) 
// security purpose
// thread safety
// reduce human mistakes 
const daysInWeek = 7;
const maxNumber = 5;
console.log(daysInWeek);
// mutable type = let, immutable type=const

// 4. variable types
// primitive, single item: number, string, boolean, null, undefined, symbol
// object, box container (single item을 묶어서 하나의 데이터 타입으로 만듬)

// 4-1 primitive,single item (값 자체가 메모리에 저장됨)
//number 
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 0;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

//string 
const char = 'c';
const brendan = "brendan";
const greeting = 'hello' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
//value앞에 작은따옴표가 아니라 backtick이라는 문자를 넣어주면 string 값을 합쳐준다. 이것을 template literals라고 한다./


//boolean
//false: 0, null, undefined, NaN, ''
//true: any other value
const canRead = true;
const test = 3 < 1; //false
console.log(`value:${canRead}, type: ${typeof canRead}`);
console.log(`value:${test}, type: ${typeof test}`);
// value:${canRead}에서는 const canRead에 할당한 value값을 출력해주고 type:${typeof canRead}에서는 canRead의 type을 출력해준다.

// null: null이라는 값이 지정되어있는 상태
let nothing = null;
console.log (`value: ${nothing}, type: ${typeof nothing}`);

//undefine: 값이 아무것도 할당되지 않은 상태는 undefine이다. 이것은 null과는 다른것이다 왜냐하면  null은 null이라는 값이 있지만 undefine은 아예 아무 값도 없는 상태이기 때문이다.
let x;
console.log (`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);
// 같은 string으로 symbol을 만들었어도 symbol1 과 symbol2는 같지 않다고 false로 출력된다.
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2);
// 이번에는 symbol1과2가 같다고 true 나오는데 Symbol.for을 사용하면 같게된다.
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// object, real-life object, data structure (값이 너무 크기 때문에 referance가 저장되어 referance가 가르키는 값을 반환해준다.)
const jin = {name: 'jin', age: 28};
// 한번 jin을 const로 선언하면 더이상 jin이라는 변수를 바꿀수없음. 하지만 할당된 값은 바꿀수있음
jin.age = 21; //이런식으로 하면 28이었던 값이 21로 바뀌게됨 referance값만 바꿔준것임


// 5 dynamic typing: dynamically typed language
//  변수가 어떤 형식인지 (string,number)에 상관없이 변수에 값을 할당할수있다.
let text = 'hello';
console.log(text);
console.log (`value: ${text}, type: ${typeof text}`);
text = 1;
console.log (`value: ${text}, type: ${typeof text}`);
// 처음 text를 선언할때 'hello'라는 문자열 즉 string타입을 넣었기 때문에 typeof 를 이용하여 text를 입력했을때 string이라고 떳다 하지만 이후 
// text = 1; number타입으로 입력하자 typeof에서 number라는 타입을 반환하였다. 이처럼 형식에 구애받지 않고 타입이 바뀌는데 이거는 좀 위험할수있다.



