// 1.어떤 데이터인지 2.어떤방법으로 요청할건지 잘 적어놔야 통신잘됨
// 1. 데이터의 url 2.get인지 post인지 잘 기재해야함

// get 데이터 읽을때 post 데이터 보낼때 
// 예시) 웹툰이면 comic.naver.com으로 get 요청한다
// 그럼 웹툰 줌

// post요청은
{/* <form action='dsjfdjois' method='post'></form> */}
// get / post 요청하면 브라우저 새로고침됨

// 그래서 ajax를 쓰면 됨 새로고침없이 get, post 요청하는 기능임



// ajax로 get 요청하는법!!
// 라이브서버로 열어야함

// 제이쿼리
// 겟요청하기
$.get('https://codingapple1.github.io/hello.txt')
    // 성공했을때 안에있는 코드를 실행해줌
    .done(function(data){
        console.log(data)
    })
    // ajax 실패시 코드 실행하고 싶으면 
    .fail(function(){
        console.log('실패함')
    })

    // 404는 url 주소가 이상하다는 뜻 서버 개발자한테 물어보거나 해야함

    // 포스트 요청하는법
// $.post('https://codingapple1.github.io/hello.txt', {name : 'kim'})
//     // 성공했을때 안에있는 코드를 실행해줌
//     .done(function(data){
//         console.log(data)
//     })


$.get('https://codingapple1.github.io/price.json')
    .done(function(data){
        console.log(data.price)
    })
    .fail(function(){
        console.log('실패함')
    })


    //쌩자바스크립트는 fetch 겟요청임 이런거 쓰면됨!!
    fetch('https://codingapple1.github.io/price.json')
    // 서버와 유저는 문자자료만 주고받기 가능
    .then(rse => rse.json())
    .then(data => {
        console.log(data)
    })
    .catch(error => {
        console.log(error)
    })




    


















let card = document.querySelectorAll('.card');
let cardTitle = document.querySelectorAll('.card-title');
let cardPrice = document.querySelectorAll('.card-price');

var products = [
    { id : 0, price : 70000, title : 'Blossom Dress' },
    { id : 1, price : 50000, title : 'Springfield Shirt' },
    { id : 2, price : 60000, title : 'Black Monastery' }
  ];


  console.log(products)
  cardTitle[0].innerHTML = products[0].title;
  cardPrice[0].innerHTML = products[0].price;
  cardTitle[1].innerHTML = products[1].title;
  cardPrice[1].innerHTML = products[1].price;
  cardTitle[2].innerHTML = products[2].title;
  cardPrice[2].innerHTML = products[2].price;

// for(let i = 0; i < 3; i++){
//     cardTitle[i].innerHTML = products[i].title;
//     cardPrice[i].innerHTML = products[i].price;
// }
