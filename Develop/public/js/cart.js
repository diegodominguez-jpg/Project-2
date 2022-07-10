const cartList = document.querySelector('#cart-list')
const cart = JSON.parse(localStorage.getItem('cart')) || []

console.log(cart)

for (let i=0;i<cart.length;i++) {
    const liEl = document.createElement('li');
    liEl.textContent = cart[i]
    cartList.append(liEl)
}