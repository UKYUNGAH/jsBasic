let form = document.querySelectorAll('.form-select');

form[0].addEventListener('input', function(){
    if(form[0].value === '셔츠'){
        form[1].classList.remove('form-hide');
    } else if(form[0].value === '모자') {
        form[1].classList.add('form-hide')
    }
});



// $('.form-select').eq(0).on('input', function(){

//     var value = $('.form-select').eq(0).val();
//     if (value == '셔츠') {
//       $('.form-select').eq(1).toggleClass('form-hide');
//     }

//   });
    





// const tabButtons = document.querySelectorAll('.tab-button');
// const tabContent = document.querySelectorAll('.tab-content');


// // ============ 위에 코드 for문으로 한번에 작성하기
// for(let i = 0; i < tabButtons.length; i++){
//     tabButtons[i].addEventListener('click', function(){
//         //모든탭 초기화
//         for(let j = 0; j < tabButtons.length; j++){
//             tabButtons[j].classList.remove('orange');
//             tabButtons[j].classList.remove('show');
//             tabContent[j].classList.remove('show');
//         }
//         // 선택된 탭버튼 콘텐츠에 클래스 추가
//         tabButtons[i].classList.add('orange');
//         tabButtons[i].classList.add('show');
//         tabContent[i].classList.add('show');
//     })
// }
  