// 변수의 타입과 접근범위까지 지정 가능
class Person_t {
    private name: string;
    public age: number;
    readonly log: string;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
}

