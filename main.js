async function getProducts(){
const response = await fetch("https://dummyjson.com/products");
const data =  await response.json();
const products = data.products;


const result = products.map(function(product){
return `
<h1 class="title">${product.title}</h1>
<img src =${product.thumbnail} class="img"/>
<h3 class="price"> price: ${product.price}</h3>

`
}).join('');

document.querySelector(".products").innerHTML=result;
}
getProducts();
