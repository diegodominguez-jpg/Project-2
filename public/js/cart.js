const container = document.querySelector('.container-group-col')
const cartList = document.querySelector('#cart-list')
const price = document.querySelector('#price')
const cart = JSON.parse(localStorage.getItem('cart')) || []

if (cart.length > 0) {
    let total = 0
    for (let i=0;i<cart.length;i++) {
        const liEl = document.createElement('span');
        liEl.textContent = cart[i]
        cartList.append(liEl)
        total += 0.99
    }
    price.innerHTML = Number(total.toFixed(2))
}
else {
    container.innerHTML = ``
    const pEl = document.createElement('p')
    pEl.setAttribute('id', 'empty-cart')
    pEl.innerHTML = `
    Your cart is empty! Visit <a href='/dashboard/discover'>discovery</a> to search for songs to add to your playlist
    `
    container.append(pEl)
}

const checkout = async () => {
    const response = await fetch('/api/search/checkout', {
        method: 'POST',
        body: JSON.stringify({cart}),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        cart.length = 0;
        localStorage.setItem('cart', JSON.stringify(cart));
        document.location.replace('/dashboard/profile');
    } else {
        alert('Failed to checkout');
    }
}

document
  .querySelector('#create-playlist')
  .addEventListener('click', checkout)
