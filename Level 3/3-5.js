// 자바스크립트로 html 생성하기
// test에 p태그 생성하기


// 생성하는법1 성능 얘가 더 빠름 근데 별차이 없음ㄴ
// var a = document.createElement('p');
// a.innerHTML = '안녕';
// document.querySelector('#test').appendChild(a)

// 생성하는방법 2
var 템플릿 = '<p>안녕</p>';
document.querySelector('#test').insertAdjacentHTML('beforeend', 템플릿) //insertAdjacentHTML 추가해주는 문법임
// document.querySelector('#test').innerHTML = 템플릿;


// 바지를 선택하면 28,30나오게 짜기









let form = document.querySelectorAll('.form-select');
var op1 = '<option>28</option><option>29</option>';

form[0].addEventListener('input', function(){
    if(form[0].value === '셔츠'){
        form[1].classList.remove('form-hide');
    } else if(form[0].value === '모자') {
        form[1].classList.add('form-hide')
    }
    
    if(form[0].value === '바지'){
        form[1].classList.remove('form-hide');
        form[1].innerHTML = op1;
    } else if(form[0].value === '모자') {
        form[1].classList.add('form-hide')
    }
});

