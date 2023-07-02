var a;

function getB(b = 10) {
    var c = 'hi';
    // 파라미터 타입으로 반환 값 타입이 추론
    return b;
}

// 타입 추론 기본2
interface Dropdown1<T> {
    value: T;
    title: string;
}

var shoppingItem: Dropdown1<string> = {
    value: "abc",
    title: "hello"
}

// 타입 추론 기본3
interface Dropdown<T> {
    value: T;
    title: string;
}

interface DetailDropDown<K> extends Dropdown<K>{
    description: string;
    tag: K;
}

var detailedItem: DetailDropDown<string> = {
    title: "abc",
    description: "ab",
    value: "hello",
    tag: "hi"
}

// Best Common Type
let arr1 = [1,2,true,true,'a'];