var myHttp = new XMLHttpRequest();
var products=[];
myHttp.open('GET','https://fakestoreapi.com/products');
myHttp.send();


myHttp.addEventListener('readystatechange' ,function(){
if(myHttp.readyState == 4 && myHttp.status == 200 ){
   products=JSON.parse(myHttp.response)
   console.log(products)
   //displayWebsitProducts();
   displayProducts();
   
}

})

function displayProducts(){
var allProducts=``;
for(var i=0;i<products.length;i++){
   allProducts +=`  <div class="col-4">
   
   <img src="${products[i].image} " id="productsimage" onclick="imageclick(${i})"></a>
   
   <h4> ${products[i].category} </h4></a>
   <div class="rating">
   <i class="fa fa-star" ></i>
      <i class="fa fa-star" ></i>
      <i class="fa fa-star" ></i>
      <i class="fa fa-star" ></i>
   <i class="fa fa-star-o" ></i>          
   </div>
   <p>${products[i].price}</p>
</div>`
}

document.getElementById("allproduct").innerHTML = allProducts;
}
/*  var image_products =document.getElementsByClassName("image")
image_products.addEventListener('click',imageclick) */

function imageclick(index){
localStorage.setItem("index",index);
window.location.href="Product-details.html";
} 