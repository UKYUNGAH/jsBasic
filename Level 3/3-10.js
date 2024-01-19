
var products = [
    { id : 0, price : 70000, title : 'Blossom Dress' },
    { id : 1, price : 50000, title : 'Springfield Shirt' },
    { id : 2, price : 60000, title : 'Black Monastery' }
  ];

//============  array 정렬하는법
var 어레이 = [7,3,5,2,40]
var 어레이2 = ['a', 'c', 'b']



// 가장간단한 정렬방법
// 어레이.sort();

console.log(어레이); //문자정렬이라 2,3,40,5,7  순으로 나옴

//숫자정렬은 이렇게 쓰면됨 오름차순정렬임
어레이.sort(function(a,b){
    return a - b //만약 a,b가 있다면 a-7 b-3 7오른쪽으로 옮김
    // a,b는 어레이안의 자료임!! return 오른쪽이 양수면 a를 오른쪽으로옮김
})
console.log(어레이)

// 내림차순으로 하고싶을때
어레이.sort(function(a,b){
    return b - a //만약 a,b가 있다면 a-7 b-3 7오른쪽으로 옮김
    // a,b는 어레이안의 자료임!! return 오른쪽이 양수면 a를 오른쪽으로옮김
})
console.log(어레이)

// abc순 문자정렬
console.log(어레이2.sort())

// 역순정렬 하는법
어레이2.sort(function(a,b){
    return a > b
})
console.log(어레이2)


//------- array 자료 원하는것만 필터하기 .filter()
// 필터함수는 신문법이여서 변수에 저장해서 써야함 
// sort()는 원본 변형 o .filter는 원본변형 x
var 새어레이 = 어레이.filter(function(a){
    return a < 4
})
console.log(새어레이) //3, 2 잘 출력됨


//==== map()함수 어레이자료 전부 똑같이 변형
var 새어레이 = 어레이.map(function(a){
    return a * 4
})
console.log(새어레이) //각각에 4씩 곱해줌






// ====== 버튼 누르면 product안의 데이터 가격순 정렬하기
var price = document.querySelector('#price');

price.addEventListener('click', function(){
  products.sort(function(a, b){
      return a.price - b.price
  })
  // console.log(products)
  // 안에있던 html내용을 초기화하고
  row.innerHTML = ''  
  // products 만큼 카드 생성!
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
})





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



// 숙제1. 상품명 다나가순 정렬 버튼 기능
// 숙제2. 6만원 이하만 보여주기. 버튼과 기능
var word = document.querySelector('#word');
var add2 = document.querySelector('#arrowdown6');

word.addEventListener('click', function(){
    products.sort(function(a, b){
        if(a.title < b.title){
            return 1
        }else{
            return -1
        }
    })
    row.innerHTML = ''
    products.forEach(function(a, i){
        var 템플릿 = 
    `<div class="col-sm-4">
    <img src="https://via.placeholder.com/600" class="w-100">
    <h5>${a.title}</h5>
    <p>가격 : ${a.price}</p>
  </div>`
    row.insertAdjacentHTML('beforeend', 템플릿)
    })
})

add2.addEventListener('click', function(){
    var filter = products.filter(function(a){
        return a.price <= 60000
    })
    row.innerHTML = ''
    filter.forEach(function(a, i){
        var 템플릿 = 
        `<div class="col-sm-4">
        <img src="https://via.placeholder.com/600" class="w-100">
        <h5>${a.title}</h5>
        <p>가격 : ${a.price}</p>
      </div>`
        row.insertAdjacentHTML('beforeend', 템플릿)
    })
})


var 어레이 = ['가', '라', '다', '나']

// 가나다라 정렬
어레이.sort();
console.log(어레이)
// 역순정렬
어레이.sort(function(a, b){
    if(a < b){
        return 1
    }else{
       return -1
    }
})
console.log(어레이)