


var car2 = {name : '소나타', price : [50000, 3000, 4000]}

// document.querySelector('.car-title').innerHTML = car2.name
// document.querySelector('.car-price').innerHTML = car2.price


// 복잡한 자료형은 일단 콘솔로그 찍어보기
// document.querySelector('.car-price').innerHTML;
// console.log(car2.price[0])

document.querySelector('.car-price').innerHTML = car2.price[0]

// 웹서비스만들때 1. 완성된 html파일 보내거나 (서버사이드랜더링 - 서버가 html 다 만들어야해서 서버가 귀찮음) 2. 빈 html파일 + 데이터를 보낸다 html완성은 js가 하도록 함 (서버사이드랜더링 - 서버가 편함) 지금하는게 2번방식임


// 숙제


















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
  