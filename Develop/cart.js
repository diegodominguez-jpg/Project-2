// select elements
const vinylsEl = document.querySelector(".vinyls");
const cartItemsEl = document.querySelector(".cart-items");
const subtotalEl= document.querySelector(".subtotal");
const totalItemsInCartEl= document.querySelector(".total-items-in-cart");

//render products
function renderVinyls(){
    vinyls.forEach( (vinyl) => {
        vinylsEl.innerHTML += `
        <div class="item">
                    <div class="item-container">
                        <div class="vinyl-img">
                            <img src="${vinyl.imgSrc}" alt="${vinyl.name}">
                        </div>
                        <div class="artist">
                            <h2>${vinyl.artist}</h2>
                            <h2><small>$</small>${vinyl.price}</h2>
                            <p>${vinyl.description}</p>
                        </div>
                    <div class="add-to-cart" onclick="addToCart(${vinyl.id})">
                        <img src="assets/images/pluss-button.png" alt="add to cart">
                    </div>
                </div>
            </div>
        `;
    });
}
renderVinyls();

//cart array

let cart = JSON.parse(localStorage.getItem("CART")) || [];
updateCart();

//Add to cart

function addToCart(id) {
    //check if vinyl already exists in cart
    if (cart.some((item) => item.id === id)) {
        changeNumberofUnits("plus", id)
    } else {
        const item = vinyls.find((vinyl) => vinyl.id === id);

        cart.push({
            ...item,
            numberOfUnits : 1,
        });
    }

    updateCart();
}

//update cart
function updateCart(){
    renderCartItems();
    renderSubtotal();

    // save cart to localstorage
    localStorage.setItem("CART", JSON.stringify(cart));
}

//calculate and render subtotal
function renderSubtotal(){
    let totalPrice = 0, 
        totalItems = 0;

    cart.forEach((item)=> {
        totalPrice += item.price * item.numberOfUnits;
        totalItems += item.numberOfUnits;
    });

    subtotalEl.innerHTML = `Subtotal (${totalItems} items): $${totalPrice.toFixed(2)}`;
    totalItemsInCartEl.innerHTML = totalItems;
}

//render cart items
function renderCartItems(){
    cartItemsEl.innerHTML = ""; //clear cart
    cart.forEach((item) => {
        cartItemsEl.innerHTML += `
            <div class="cart-item">
                <div class="item-info" onclick="removeItemFromCart(${item.id})">
                    <img src="${item.imgSrc}" alt=${item.name}>
                    <h4>${item.name}/h4>
                </div>
                <div class="unit-price">
                    <small>$</small>${item.price}
                </div>
                <div class="units">
                    <div class="btn minus" onclick="changeNumberofUnits('minus', ${item.id})">-</div>
                    <div class="number">${item.numberOfUnits}</div>
                    <div class="btn plus" onclick="changeNumberofUnits('plus', ${item.id})">+</div>
                </div>
            </div>
        `;
    });
}
//remove item from cart
function removeItemFromCart(id){
     cart = cart.filter( (item) => item.id !== id)
     updateCart();
}
//change number of units for an item
function changeNumberofUnits(action, id) {
    cart = cart.map((item) => {
        let numberOfUnits = item.numberOfUnits;

        if(item.id === id){
          if (action === "minus" && numberOfUnits > 1) {
            numberOfUnits--;
          } else if (action === "plus" && numberOfUnits < item.instock) {
            numberOfUnits++;
          }
        }

        return {
            ...item,
            numberOfUnits,
        };
    });
    
    updateCart();
}