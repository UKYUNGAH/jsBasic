
var products = [
    { id : 0, price : 70000, title : 'Blossom Dress' },
    { id : 1, price : 50000, title : 'Springfield Shirt' },
    { id : 2, price : 60000, title : 'Black Monastery' }
  ];



// 숙제 상품목록 3개 만들어오기 자바스크립트로 html 생성해서

var row = document.querySelector('.row');
var container = document.querySelector('.container');
var btn = document.querySelector('#more');

// var 템플릿 = 
// `<div class="col-sm-4">
// <img src="https://via.placeholder.com/600" class="w-100">
// <h5>${products[0].title}</h5>
// <p>가격 : ${products[0].price}</p>
// </div>`;

// // $('.row').append(템플릿)
// row.insertAdjacentHTML('beforeend', 템플릿);

products.forEach((a, i)=>{
  var 템플릿 = 
  `<div class="col-sm-4">
  <img src="https://via.placeholder.com/600" class="w-100">
  <h5>${a.title}</h5>
  <p>가격 : ${a.price}</p>
  </div>`;

  // <h5>${a.title}</h5> 을 해줘도됨
  row.insertAdjacentHTML('beforeend', 템플릿);
})


var count = 0;
btn.addEventListener('click', function(data){
  count++
  fetch(`https://codingapple1.github.io/js/more${count}.json`)
    .then(res => res.json())
    .then(data => {
      // 3개 생성하기
      data.forEach((a, i) =>{
        var 템플릿 = 
        `<div class="col-sm-4">
        <img src="https://via.placeholder.com/600" class="w-100">
        <h5>${a.title}</h5>
        <p>가격 : ${a.price}</p>
        </div>`;
      
        row.insertAdjacentHTML('beforeend', 템플릿);
      })
    })

})