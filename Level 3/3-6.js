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
let pants = [20, 30, 32, 34];
let shirts = [95, 100, 105];
let op1 = `<option>28</option>`;

form[0].addEventListener('input', function(){
    if(form[0].value === '셔츠'){
        form[1].classList.remove('form-hide');
        form[1].innerHTML = '';

        shirts.forEach((b) => {
            console.log(b)
            form[1].insertAdjacentHTML('beforeend', `<option>${b}</option>`);
        })
    } else if(form[0].value === '바지'){
        form[1].classList.remove('form-hide');
        form[1].innerHTML = '';
  
        // array에 붙일수있는 forEach 반복문
        pants.forEach((a, i) => {
            console.log(a)
            // 모르겠음 콘솔창에 찍어보기
            // console.log(123)
                form[1].insertAdjacentHTML('beforeend', `<option>${a}</option>`);
        })
    }
});

// 오브젝트 자료 갯수만큼 반복믄 돌리려면 for in 쓰기

var obj =  {name : 'kim', age : 20};

for (var key in obj){
    // 자료 갯수만큼 반복문 돌리기
    console.log(1) // 그럼 1 2번 반복됨
    console.log(key) // name, age 나옴
    console.log(obj[key]) // 전부 다 나옴
}

// 반복문의 용도 코드 반복 어레이 오브젝트 데이터 전부 꺼낼때 사용함
// 화살표 함수 사용가능 arrow function this 의 뜻이 달라질수있음`