// interface Person1 {
//     name: string;
//     age: number;
// }

type Person1 = {
    name: string;
    age: number;
}

var user: Person1 = {
    name: '유저',
    age: 30
}

// 자료형으로도 사용가능
type Mystring = string;
var str: Mystring = 'hello';

type Todo1 = {id: string, title: string, done: boolean};

