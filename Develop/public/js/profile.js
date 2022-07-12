//create an edit button that when you press on it, x's will appear next to all the song names
//clicking on an x will remove it from playlist
const ulEl = document.querySelector('#playlist');

const editPlaylist = async () => {
    fetch('/api/search/playlist', {
        method: 'GET',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' }
    })
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        ulEl.innerHTML = ``
        for (let i = 0; i < data.length; i++) {
            const liEl = document.createElement('li')
            liEl.innerHTML = `
            <button class='delete' onclick='removeSong("${data[i].song_id}")'>X</button> ${data[i].song_id} 
            `
            ulEl.append(liEl)
        }
    })
}

const removeSong = async (e) => {
    const remove = await fetch('/api/search/delete', {
        method: 'DELETE',
        body: JSON.stringify({song_name: e}) //Not sure if we can pass a body on delete method, might need to send over url
    })

    if (remove.ok) {
        console.log('yay')
    } else {
        console.log('sad')
    }
}



document
  .querySelector('#edit')
  .addEventListener('click', editPlaylist)

// const deleteBtn = document.querySelectorAll('.delete')
// deleteBtn.forEach((btn) => {
//     btn.addEventListener('click', removeSong)
// })
