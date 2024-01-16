

const tabButtons = document.querySelectorAll('.tab-button');
const tabContent = document.querySelectorAll('.tab-content');
const list = document.querySelector('.list');


// ============ 위에 코드 for문으로 한번에 작성하기
/* for(let i = 0; i < tabButtons.length; i++){
    tabButtons[i].addEventListener('click', function(){
        //모든탭 초기화
        for(let j = 0; j < tabButtons.length; j++){
            탭클래스지워(j)
        }
        // 선택된 탭버튼 콘텐츠에 클래스 추가
        tabButtons[i].classList.add('orange');
        tabButtons[i].classList.add('show');
        tabContent[i].classList.add('show');
    })
} */


// 탭기능 다르게 만들기 -> 이벤트리스너가 줄면 램용량이 줄어듬
list.addEventListener('click', function(e){

    // 간단하게 줄어보기
    // if(e.target == tabButtons[0]){
    //     탭클래스지워(0)
    //     탭클래스추가(0)
    // }
    // if(e.target == tabButtons[1]){
    //     탭클래스지워(1)
    //     탭클래스추가(1)
    // }
    // if(e.target == tabButtons[2]){
    //     탭클래스지워(2)
    //     탭클래스추가(2)
    // }

    // 만약 dataset을 넣었다면
    // console.log(e.target.dateset.id)
    탭클래스지워(e.targer.dateset.id);


})

// 함수 축약하기 - 함수 넣고 파라미터에 구멍뚫고 실행해야함
function 탭클래스지워(구멍){
    tabButtons[구멍].classList.remove('orange');
    tabButtons[구멍].classList.remove('show');
    tabContent[구멍].classList.remove('show');
}

function 탭클래스추가(구멍) {
    tabButtons[구멍].classList.add('orange');
        tabButtons[구멍].classList.add('show');
        tabContent[구멍].classList.add('show');
}

// 유저몰래 html태그에 몰래 정보 숨기기 가능
// data-자료이름='값' 나는 예시로 data-id="0"이렇게 넣어놓음
// 자료 출력하는법 
// 셀렉터.dataset.자료이름
// document.querySelector('.tab-button').dataset.id를 콘솔로그에 찍어보면 0나옴
