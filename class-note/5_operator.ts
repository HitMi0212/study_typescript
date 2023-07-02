// 연산자를 이용한 타입 정의

function logMessage(value: any){
    console.log(value);
}
// any는 타입 정의의 장점이 없다
logMessage('hello');
logMessage(100);
logMessage(false);

// 유니온 타입 : 하나 이상의 타입
var uni: string | number | boolean;
function logMessage2(value: string | number){
    if(typeof value === 'number'){
        value.toLocaleString();
    } else if (typeof value === 'string'){
        value.toString();
    } else{
        throw new TypeError('value must be string or number');
    }
    console.log(value);
}
logMessage2('hello');
logMessage2(100);

interface Developer1 {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
}

function askSomeone(someone: Developer1 | Person){
    someone.name;
}

// 인터섹션 타입 : 모든 타입을 만족 & 사용
var uni2: string & number & boolean;
function askSomeone2(someone: Developer1 & Person){
    someone.name;
    someone.skill;
    someone.age;
}

askSomeone({name: 'developer', skill: 'web develope'});
askSomeone({name: '캡틴', age: 100});

askSomeone2({name: 'developer', skill: 'web develope', age: 27});