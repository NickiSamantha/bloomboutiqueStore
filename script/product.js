let container = document.querySelector('[ourStore]')
let searchProduct = document.querySelector('[searchProduct')
let sortingByAmount = document.querySelector('[sorting]')
let products = JSON.parse(
    localStorage.getItem('products')
)
//items/products
let checkoutItems = JSON.parse(localStorage.getItem('checkout'))
? JSON.parse(localStorage.getItem('checkout'))
: []

//Current Year 
document.querySelector('[currentYear]').textContent = new Date().getUTCFullYear()
function displayProducts(args){
    container.innerHTML
}