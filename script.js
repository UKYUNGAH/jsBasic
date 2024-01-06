// 1번 369
function 삼육구게임(num) {
  if (num % 3 === 0) {
    console.log("박수");
  } else {
    console.log("통과");
  }
}

삼육구게임(9);

// 2번 3의배수는 박수 9의 배수는 박수 두번
function 삼육구게임2(num) {
  if (num % 9 === 0) {
    console.log("박수 박수");
  } else if (num % 3 === 0) {
    console.log("박수");
  } else {
    console.log("통과");
  }
}

삼육구게임2(9);

// 3번 공입중개사 점수 입력 합격 여부
// function 합격했냐(a, b) {
//   if (a + b >= 120) {
//     console.log("합격");
//   } else if (a < 40 || b < 40) {
//     console.log("불합격");
//   } else {
//     console.log("불합격");
//   }
// }
function 합격했냐(a, b) {
  if (a < 40 || b < 40) {
    console.log("불합격");
  } else if (a + b >= 120) {
    console.log("합격");
  } else {
    console.log("불합격");
  }
}

합격했냐(70, 70);
합격했냐(30, 100);
합격했냐(50, 50);
