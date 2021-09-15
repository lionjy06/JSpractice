// class란 template만 정의 해놓은것.
// class라는 틀을 이용하여 만들어진 결과물이 object이다.
// class는 메모리에 올라가지 않지만 그것으로 만들어진 결과물 즉 object는 메모리에 올라간다.

'use strict';
// class: template
// object: instance of class

// when we declare class, we put first letter of class as capital letter
//1. class 선언
class Person {
  // constructor(field)
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // method
  speak() {
    console.log(`${this.name}: hello!`);
  }
}

// object 생성
const jin = new Person('jin',28);
// 새로운 object를 만들때는 new라는 키워드를 쓰고 정의 해준 틀(class)을 쓴다. 
console.log(jin.name);
console.log(jin.age);
jin.speak()

// 2. getter and setter
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get age() {
    return this._age;
  }

  set age(value) {
    // if (value < 0) {
    //   throw Error('age cannot be negative');
    // }
    this._age = value < 0 ? 0 : value;
    // value를 0보다 작게 만들면 0으로 표기되고 그렇지 않다면 value에 입력한 값대로 된다.
  }
// getter와 setter를 만들때 변수이름을 constructor이름과 같게하면 루프에 빠져 call stack이 꽉찬다. 그래서 변수의 이름을 다르게 한다.
// age라는 변수를 사용하고 싶다면 age를 쓰는것이 아니라 조금 다르게 _age 이런식으로 쓴다
}

const user1 = new User('steve','jobs',-1);
console.log(user1.age);
// practce stage 1. 이름을 -1로 설정했지만 이것은 말이 안됨
// 그래서 이런 실수를 방지하기 위해서 만들어진것이 getter and setter 이다.


// 3. public and private fields
class Experiment {
  publicField = 2;
  #privateField = 0;
}

// const experiment = new Experiment();
// console.log(experiment.publicField.Field);
// console.log(experiment.privateField.Field);


//5. 상속 & 다양성
class Shape {
  constructor(width,height,color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`draw ${this.color} color of`);
  }

  getArea() {
    return width * this.height;
  }
}
// Shape이라는 calss를 만들고 constructor로 틀을 제작한다. 또한 draw와 getArea라는 method를 만든다.


class Rectangle extends Shape {}
// Shape클래스를 다른곳으로 상속시키기 위해 extends라는 키워드를 사용하였다.
// Rectangle이라는 클래스는 Shape라는 클래스의 상속을 받아 만들어졌다. 

const rectangle = new Rectangle(20,20,'blue');
// Shape클래스의 constructor에 정의된것에 따라 넓이 20, 높이 20, 색 'blue'를 입력한후
// Rectangle.draw()를 호출한다.
rectangle.draw();

class Triangle extends Shape {
  draw() {
    super.draw();
    // super.<name of parent-method >;을 하면 부모인 Shape클래스의 draw 메소드를 받아와서 사용할수있다.
    console.log('뾰죡');
  }
  getArea() {
    return (this.width * this.height) / 2;
  }
  // Shape클래스의 기능을 상속받았지만 overriding을 통해 Triangle class의 독자적인 getArea를 만들어내서 사용한다.
}

const triangle = new Triangle(30,30,'red');
triangle.draw()
console.log(triangle.getArea());


// 6. class checking: instanceOf
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(rectangle instanceof Object);
// instanceof 는 왼쪽의 object가 오른쪽의 클래스에 의해서 만들어진 것인지를 true,false로 알려줌