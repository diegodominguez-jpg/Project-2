const msg = document.querySelector('#message')

const searchFormHandler = async (event) => {
    event.preventDefault();

    //const type = document.querySelector('#search-type').value;
    const genre = document.querySelector('#search-genre').value;
    const container = document.querySelector('#search-results')
    
    
    if (genre) {
        if (genre == 'all') {
            document.location.replace('/dashboard/discover'); 
        }
        else {
            fetch(`/api/search/${genre}`, {
                method: 'GET',
                mode: 'cors',
                headers: { 'Content-Type': 'application/json' }
            })
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                container.innerHTML = ``
                const divEl = document.createElement('div');
                for (let i=0; i< data.length; i++) {
                    if (i === 0) {
                        const titleEl = document.createElement('h3')
                        titleEl.textContent = `Songs by ${data[i].artist.name}`
                        divEl.append(titleEl)
                    }
                    const liEl = document.createElement('li');
                    const btnEl = document.createElement('button');
                    btnEl.setAttribute('data-song', `${data[i].name}`);
                    btnEl.setAttribute('class', 'add-song');
                    btnEl.textContent = '+';
                    btnEl.addEventListener('click', addToCart)
                    liEl.textContent = data[i].name;
                    liEl.append(btnEl)
                    divEl.append(liEl)
                }
                container.append(divEl)
            });
        }
    }
};

const cart = JSON.parse(localStorage.getItem('cart')) || []
const addToCart = async (e) => {
    if (cart.indexOf(e.target.dataset.song) === -1) {
        cart.push(e.target.dataset.song)
        msg.textContent = `added '${e.target.dataset.song}' to cart`
    }
    else {
        msg.textContent = 'This song is already in your cart, proceed to checkout to add this song to your playlist'
    }
}

const toCart = async () => {
    localStorage.setItem('cart', JSON.stringify(cart));
    document.location.replace('/dashboard/cart'); 
}

document
  .querySelector('#search-form')
  .addEventListener('submit', searchFormHandler);

document
  .querySelector('#to-cart')
  .addEventListener('click', toCart)

const addBtnEl = document.querySelectorAll('.add-song')
addBtnEl.forEach((btn) => {
    btn.addEventListener('click', addToCart);
})
  