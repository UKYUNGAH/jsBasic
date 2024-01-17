// Q. Array에서 철수라는 자료를 찾기
var 출석부 = ['흥민', '영희', '철수', '철수', '재석'];


function 이름찾기(name){
    
    // if(name == 출석부[0]){
    //     console.log('있어요')
    // }
    // if(name == 출석부[1]){
    //     console.log('있어요')
    // }
    // if(name == 출석부[2]){
    //     console.log('있어요')
    // }
    // if(name == 출석부[3]){
    //     console.log('있어요')
    // }

    for(let i = 0; i < 출석부.length; i++){
        if(name == 출석부[i]){
            console.log('있어요')
        }
    }
}

이름찾기('철수')


// Q. 갑자기 구구단을 콘솔창에 출력하고 싶습니다.

for(let i = 2; i <= 9; i++){
    for(let j = 1; j <= 9; j++){
        console.log(i * j)
    }
}


//  Q. 평균점수 계산기 만들기
 

// 어떤 함수에
// 기존 모의고사 성적들을 array 자료에 전부 담아 **첫 파라미터로** 입력하고
// 이번 11월 모의고사 성적을 **둘 째 파라미터로** 입력하면
// 11월 성적이 기존 성적들의 평균에 비해 얼마나 우수한지 결과를 알려주고 싶습니다.
// 어떻게 함수를 만들면 될까요?

function 함수(arr, b){
    var result = 0;
  
    for ( let i = 0; i < arr.length; i++ ) {
      result =+ arr[i]
    }
  
    if (result/arr.length < b) {
      console.log('올랐네요');
    } else {
      console.log('같거나 떨어졌네요 재수추천')
    }
  }
  
  함수([2,3,4], 10);