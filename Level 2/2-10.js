// 버튼0 시작

/* 
기존의 버튼? orange는 제거하기
버튼0 누르면 - 버튼0에 orange 클래스 부착
박스0에 orange 클래스 부착
div에 show 클래스 추가a
*/
// 첫번째 버튼 찾기

// p도 나타나게하기

const tabButtons = document.querySelectorAll('.tab-button');
const tabContent = document.querySelectorAll('.tab-content');

/* for(let i = 0; i < 3; i++){
    
    tabButtons[0].addEventListener('click', function() {
        tabButtons[1].classList.remove('orange');
        tabButtons[2].classList.remove('orange');
        tabButtons[0].classList.add('orange');
        tabButtons[1].classList.remove('show');
        tabButtons[2].classList.remove('show');
        tabButtons[0].classList.add('show');
        tabContent[1].classList.remove('show');
        tabContent[2].classList.remove('show');
        tabContent[0].classList.add('show');
    });
}

tabButtons[0].addEventListener('click', function() {
  tabButtons[1].classList.remove('orange');
  tabButtons[2].classList.remove('orange');
  tabButtons[0].classList.add('orange');
  tabButtons[1].classList.remove('show');
  tabButtons[2].classList.remove('show');
  tabButtons[0].classList.add('show');
  tabContent[1].classList.remove('show');
  tabContent[2].classList.remove('show');
  tabContent[0].classList.add('show');
});
tabButtons[1].addEventListener('click', function() {
  tabButtons[0].classList.remove('orange');
  tabButtons[2].classList.remove('orange');
  tabButtons[1].classList.add('orange');
  tabButtons[0].classList.remove('show');
  tabButtons[2].classList.remove('show');
  tabButtons[1].classList.add('show');
  tabContent[2].classList.remove('show');
  tabContent[0].classList.remove('show');
  tabContent[1].classList.add('show');
});
tabButtons[2].addEventListener('click', function(e) {
    
  tabButtons[1].classList.remove('orange');
  tabButtons[0].classList.remove('orange');
  tabButtons[2].classList.add('orange');
  tabButtons[1].classList.remove('show');
  tabButtons[0].classList.remove('show');
  tabButtons[2].classList.add('show');
  tabContent[0].classList.remove('show');
  tabContent[1].classList.remove('show');
  tabContent[2].classList.add('show');

  
}); */




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
  