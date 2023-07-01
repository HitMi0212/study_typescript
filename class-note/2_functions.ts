// 파라미터의 타입 정의
function sum(a: number, b: number){
    return a + b;
}

// 함수의 반환값 타입 정의
function add(): number{
    return 10;
}

// 함수의 타입을 정의하는 방식
function sum(a: number, b: number): number{
    return a + b;
}

// 파라미터를 제한하는 특성
// js와의 차이점
sum(10, 20, 30, 40); // ts는 함수의 대한 규칙을 이해하고있다.

// 함수의 옵셔널 파라미터
function log(a: string, b?: string){

}

log('hello world');
log('hello ts', 'abc');

