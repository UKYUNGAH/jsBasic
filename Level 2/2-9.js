// 버튼0 시작

/* 
기존의 버튼? orange는 제거하기
버튼0 누르면 - 버튼0에 orange 클래스 부착
박스0에 orange 클래스 부착
div에 show 클래스 추가a
*/
// 첫번째 버튼 찾기
const tabButtons = document.querySelectorAll('.tab-button');

tabButtons[0].addEventListener('click', function() {
  tabButtons[1].classList.remove('orange');
  tabButtons[2].classList.remove('orange');
  tabButtons[0].classList.add('orange');
  tabButtons[1].classList.remove('show');
  tabButtons[2].classList.remove('show');
  tabButtons[0].classList.add('show');
});
tabButtons[1].addEventListener('click', function() {
  tabButtons[0].classList.remove('orange');
  tabButtons[2].classList.remove('orange');
  tabButtons[1].classList.add('orange');
  tabButtons[0].classList.remove('show');
  tabButtons[2].classList.remove('show');
  tabButtons[1].classList.add('show');
});
tabButtons[2].addEventListener('click', function(e) {
    
  tabButtons[1].classList.remove('orange');
  tabButtons[0].classList.remove('orange');
  tabButtons[2].classList.add('orange');
  tabButtons[1].classList.remove('show');
  tabButtons[0].classList.remove('show');
  tabButtons[2].classList.add('show');

  
});