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

// 문자 중간에 변수 쉽게넣기
var a = '안녕'
// '문자문자' 이 사이에 넣는다면
// '문자' + a + '문자'
// `문자 ${a} 문자`