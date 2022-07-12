//create an edit button that when you press on it, x's will appear next to all the song names
//clicking on an x will remove it from playlist
const ulEl = document.querySelector('#playlist');
const editBtn = document.querySelector('#edit');

const editPlaylist = async () => { //now need to pass id into x button instead of name
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
            <button class='delete' onclick='removeSong(${data[i].song_id})'>X</button> ${data[i].song.name} 
            `
            ulEl.append(liEl)
        }
    })
}

const removeSong = async (id) => {
    const remove = await fetch(`/api/search/${id}`, {
        method: 'DELETE',
    })

    if (remove.ok) {
        console.log('yay')
    } else {
        console.log('sad')
    }
}

if (editBtn) {
    editBtn.addEventListener('click', editPlaylist)
}