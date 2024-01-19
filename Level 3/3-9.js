
var products = [
    { id : 0, price : 70000, title : 'Blossom Dress' },
    { id : 1, price : 50000, title : 'Springfield Shirt' },
    { id : 2, price : 60000, title : 'Black Monastery' }
  ];

var row = document.querySelectorAll('.row');
var card = `<div class="col-sm-4">
<img src="https://via.placeholder.com/600" class="w-100">
<h5>${products[]}</h5>
<p>가격 : 70000</p>
</div>`

for(let i = 0; i < 3; i++){
    let card = `<div class="col-sm-4">
    <img src="https://via.placeholder.com/600" class="w-100">
    <h5>${products[i].title}</h5>
    <p>가격 : ${products[i].price}</p>
    </div>`
    
    row[0].insertAdjacentHTML('beforeend', card)
    // for(let j = 0; j < i.length; j++){
    //     row[0].innerHTML = products.price
    // }
}