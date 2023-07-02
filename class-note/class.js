// js에서의 class

function Person(name, age){
    this.name = name;
    this.age = age;
}
var capt = new Person('캡틴', 100);

class Person {
    // 클래스 로직
    constructor(name, age) {
        console.log('생성');
        this.name = name;
        this.age = age;
    }
}

let jun = new Person('jun', 27); // 생성
console.log(jun);