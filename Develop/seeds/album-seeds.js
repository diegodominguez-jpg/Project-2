const { Album } = require('../models');

const AlbumData = [
      {//1
        name: 'Recovery',
        artist_id: 1,
        img_id: "assets/images/Recovery.jpg"
    },
    {//2
        name: 'ASCEND',
        artist_id: 2,
        img_id: "assets/images/ASCEND.jpg"
    },
    {//3
        name: 'Led Zeppelin IV',
        artist_id: 3,
        img_id: "assets/images/Led Zeppelin IV.jpg"
    },
    {//4
        name: 'Steroids (Crouching Tiger Hidden Gabber Megamix)',
        artist_id: 4,
        img_id: "assets/images/Steroids.jpg"
    },
    {//5
        name: 'Shake it Up',
        artist_id: 5,
        img_id: "assets/images/ShakeitUp.jpg"
    },
    {//6
        name: 'Rage Against the Machine',
        artist_id: 6,
        img_id: "assets/images/Rage.jpg"
    },
    {//7
        name: 'Fistful of Metal',
        artist_id: 7,
        img_id: "assets/images/Anthrax.jpg"
    },
    {//8
        name: 'Suffer',
        artist_id: 8,
        img_id: "assets/images/Suffer.jpg"
    },
    
]
    

const seedAlbum = () => Album.bulkCreate(AlbumData);

module.exports = seedAlbum;