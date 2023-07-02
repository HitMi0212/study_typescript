interface Develop {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
}

function introduce(): Develop | Person {
    return {name: 'Tony', age: 33, skill: 'making'};
}

var tony = introduce();
console.log(tony.skill);

// 타입의 범위를 구체화해야 함
if((tony as Develop).skill){
    console.log((tony as Develop).skill);
} else if((tony as Person).age){
    console.log((tony as Person).age);
}

// 타입 가드 함수
function isDevelop(target: Develop | Person): target is Develop {
    return (target as Develop).skill !== 'undefined';
}

if(isDevelop(tony)){
    console.log(tony.skill);
} else{
    console.log(tony.age);
}