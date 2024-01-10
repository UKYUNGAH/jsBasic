// 1 변수 만들기
let age = 31;
const place = '인천';

// 2. 이자율 계산하기
var 예금액 = 6000;
var 미래예금액 = 0;

미래예금액 = 예금액 * 1.20 *1.20;
console.log(미래예금액)

// "첫 예금액이 5만원 미만이면 15% 이자줌"

if ( 예금액 >= 50000 ){
    미래예금액 = 예금액 * 1.2 * 1.2 ;
  } else {
    미래예금액 = 예금액 * 1.15 * 1.15 ;
  }
  
  console.log(미래예금액)


//   커피 최대양 구하기

var first = 360;
var first2 = first * 2/3
var first3 = first2 * 2/3
console.log('총 더한거 :', first + first2 + first3);