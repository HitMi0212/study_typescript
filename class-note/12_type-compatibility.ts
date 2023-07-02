interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
}

var developer: Developer;
var person: Person;
// 구조적으로 오른쪽의 타입이 더 커야 왼쪽과 호환된다고 판단
// developer = person;
person = developer;


class Person {
    name: string;
}

developer = new Person();

var user2 = new Person;
user2 = person;
user2 = developer;

// 함수
var add = function(a: number) {
    // ...
}

var sum = function(a: number, b: number){
    // ...
}
sum = add;
add = sum;

// 제네릭
interface Empty<T> {
    // ..
}
var empty1: Empty<string>;
var empty2: Empty<number>;
empty1 = empty2;
empty2 = empty1;


interface NotEmpty<T> {
    data: T;
}
var notempty1: NotEmpty<string>;
var notempty2: NotEmpty<number>;
// 동일한 타입이지만 구조적으로 타입이 달라진다.
notempty1 = notempty2;
notempty2 = notempty1;