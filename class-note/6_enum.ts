// 별도의 형식을 지정하지 않으면 숫자형 enum으로 인식
enum Shoes {
    Nike,
    Adidas
}

var myShoes = Shoes.Nike;
// 기본값은 0
console.log(myShoes); // 0

// 문자형 enum
enum Shoes2 {
    Nike = '나이키',
    Adidas = '아디다스'
}

// 예제
enum Answer {
    Yes = 'Y',
    No = 'N'
}

function askQuestion(answer: Answer){
    if(answer == Answer.Yes){
        console.log("정답입니다.");
    } else{
        console.log("오답입니다.");
    }
}

askQuestion(Answer.Yes); // enum에서 제공하는 데이터만 넣을 수 있다.
// askQuestion("예스");
// askQuestion('Y');
// askQuestion('Yes');