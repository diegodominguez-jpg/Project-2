const searchFormHandler = async (event) => {
    event.preventDefault();

    //const type = document.querySelector('#search-type').value;
    const genre = document.querySelector('#search-genre').value;
    const container = document.querySelector('.search-results')
    
    
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
                //create for loop and on each loop append an li to the template
                container.innerHTML = ``
                console.log(data)
                for (let i=0; i< data.length; i++) {
                    if (i = 0) {
                        const titleEl = document.createElement('h3')
                        titleEl.textContent = `Songs by ${data[i].artist.name}`
                        container.append(titleEl)
                    }
                    const liEl = document.createElement('li');
                    liEl.textContent = data[i].name
                    container.append(liEl)
                }
            })
            
        }
    }
};

const cart = JSON.parse(localStorage.getItem('cart')) || []
const addToCart = async (e) => {
    if (cart.indexOf(e.target.dataset.song) === -1) {
        cart.push(e.target.dataset.song)
    }
    else {
        alert('This song is already in your cart')
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
  