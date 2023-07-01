// 동일한 규칙으로 쓰겠다는 약속
interface User{
    name: string;
    age: number;
}

// 변수에 인터페이스 활용
var user1: User = {
    age: 32,
    name: "park"
}

// 함수에 인터페이스 활용
function getUser(user: User){
    console.log(user);
}

const capt = {
    name: '캡틴'
}

// getUser(capt);

// 함수의 스펙에 인터페이스 활용
interface SumFunction {
    (a: number, b: number): number;
}

let sum: SumFunction;
sum = function(a: number, b: number): number{
    return a + b;
}

// 인덱실
interface StringArray {
    [index: number]: string
}

var arr: StringArray = ['a', 'b' ,'c'];
arr[0]; // 'a'
// arr[0] = 10; // error

// 딕셔너리 패턴
interface StringRegexDictionary {
    [key: string]: RegExp
}

var obj: StringRegexDictionary = {
    // sth: /abc/
    cssFile: /\.css$/,
    jsFile: /\.js$/,
}
// obj['cssFile'] = 'a';

// Object.keys(obj).forEach(function(value){});

// 인터페이스 확장
interface Person {
    name: string;
    age: number;
}

// 상속받아서 확장가능
interface Developer extends Person{
    language: string;
}

var captain: Developer = {
    name: "캡",
    age: 100,
    language: 'ko'
}