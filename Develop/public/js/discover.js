const searchFormHandler = async (event) => {
    event.preventDefault();

    //const type = document.querySelector('#search-type').value;
    const genre = document.querySelector('#search-genre').value;
    const container = document.querySelector('.search-results')
    
    
    if (genre) {
        if (genre == 'all') {
            document.location.replace('/discover'); 
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
                console.log(data)
                //create for loop and on each loop append an li to the template
                container.innerHTML = ``
                
                for (let i=0; i< data.length; i++) {
                    const liEl = document.createElement('li');
                    liEl.textContent = data[i].name
                    container.append(liEl)
                }
            })
            
        }
        // if (genre == 'rap') {
        //     const response = await fetch('/api/search/rap', {
        //         method: 'GET',
        //         headers: { 'Content-Type': 'application/json' },
        //     });
    
        //     if (response.ok) {
        //         //template here
        //     } else {
        //         alert('Failed to retrieve data');
        //     }
        // }
        // if (genre == 'edm') {
        //     const response = await fetch('/api/search/edm', {
        //         method: 'GET',
        //         headers: { 'Content-Type': 'application/json' },
        //     });
    
        //     if (response.ok) {
        //         //template here
        //     } else {
        //         alert('Failed to retrieve data');
        //     }
        // }
        // if (genre == 'rock') {
        //     const response = await fetch('/api/search/rock', {
        //         method: 'GET',
        //         headers: { 'Content-Type': 'application/json' },
        //     });
    
        //     if (response.ok) {
        //         //template here
        //     } else {
        //         alert('Failed to retrieve data');
        //     }
        // }
        
    }
};

document
  .querySelector('#search-form')
  .addEventListener('submit', searchFormHandler);