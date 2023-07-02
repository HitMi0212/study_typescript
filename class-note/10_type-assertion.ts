// 타입 단언
var a;
a = 20;
a = 'a';
// var b = a; // 가장 처음에 추론한 타입을 할당
var b = a as string;


// DOM API 조작
// <div id="app"></div>
var div = document.querySelector('div') as HTMLDivElement;  // 해당 element가 있을것이라고 단언
var divApp = document.querySelector('#app');

// if(div){
//     div.innerText;
// }
div.innerHTML;