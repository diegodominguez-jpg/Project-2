const searchFormHandler = async (event) => {
    event.preventDefault();

    //const type = document.querySelector('#search-type').value;
    const genre = document.querySelector('#search-genre').value;
    
    if (genre) {
        if (genre == 'all') {
            document.location.replace('/discover'); 
        }
        else {
            fetch(`/api/search/rap`)
            .then(function (data) {
                console.log(data)
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