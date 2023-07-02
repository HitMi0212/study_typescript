
// 함수에서 제네릭 사용
function logText_js(text){
    console.log();
    return text;
}
logText_js(10);
logText_js('hello');


function logText<T>(text: T): T{
    console.log(text);
    return text;
}
// text 타입을 넘겨줄때 정의
logText(10);  // number로 추론
logText<string>('hello');   // string으로 설정

// 인터페이스에 제네릭 사용
interface options_js {
    value: string;
    selected: boolean;
}

interface Option<T> {
    value: T;
    selected: boolean;
}

const option: Option<number> = {
    value: 10,
    selected: false
}

// 제네릭의 타입 제한
function logTextLength<T>(text: T[]): T[]{
    console.log(text.length);
    text.forEach(text => {
        console.log(text);
    });
    return text;
}
logTextLength<string>(['hi']);

// 정의된 타입으로 제한하기
interface LengthType {
    length: number;
}

function logTextLength2<T extends LengthType>(text: T): T {
    text.length;
    return text;
}
logTextLength2('a');
logTextLength2(10);
logTextLength2({length: 10});

// keyof로 타입 제한하기
interface ShoppingItem {
    name: string;
    price: number;
    stock: number;
}

function getShppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T{
    return itemOption;
}
getShppingItemOption(10);
getShppingItemOption<string>('a');
getShppingItemOption("name");
