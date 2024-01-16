// 변수에 여러개 담아보기
// var car = '소나타';
// var carPrice = '50000';
// var carColor = 'white';

// 변수 하나에 여러자료 저장 가능
// [자료1, 자료2, 자료3] = Array 자료형
// array쓰면 여러 자료 저장 가능 
// 자료 꺼내려면 [인덱싱번호] 해주면됨 console.log(car[1])
var car = ['소나타', 50000, 'white']
// car [0] = '아반떼'; // 자료 수정 
console.log(car[0])

// Array와 비슷한거 object자료형
// 이름붙여서 저장가능한게 장점임
// 자료  key : value 향태로 저장 가능한게 장점
var car2 = {name : '소나타', price : 50000}
// console.log(car2['price']) 이렇게 쓰거나
// console.log(car2.price) 이렇게도 가능
// 수정해보기
car2.price = 60000;
console.log(car2.price)

// 숫자 영어 한글순으로 정렬됨
car.sort()
console.log(car)
// 중간에 자르기도 가능함
console.log(car.slice(1,3)) // white 소나타만 출력됨

document.querySelector('.card').innerHTML = car2.name + "/" + car2.price

/* 두개의 차이점
쇼핑몰을 한다면 object가 좋을듯함 자료가 몇번째 있는지를 기억해야하니깐
array는 자료간 순서가 있는데 object는 순서개념이 없음

array는 자료간 정렬도 가능 car.sort() 
*/




















const tabButtons = document.querySelectorAll('.tab-button');
const tabContent = document.querySelectorAll('.tab-content');


// ============ 위에 코드 for문으로 한번에 작성하기
for(let i = 0; i < tabButtons.length; i++){
    tabButtons[i].addEventListener('click', function(){
        //모든탭 초기화
        for(let j = 0; j < tabButtons.length; j++){
            tabButtons[j].classList.remove('orange');
            tabButtons[j].classList.remove('show');
            tabContent[j].classList.remove('show');
        }
        // 선택된 탭버튼 콘텐츠에 클래스 추가
        tabButtons[i].classList.add('orange');
        tabButtons[i].classList.add('show');
        tabContent[i].classList.add('show');
    })
}
  