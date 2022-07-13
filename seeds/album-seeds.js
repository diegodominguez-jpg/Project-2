const { Album } = require('../models');

const AlbumData = [
      {//1
        name: 'Recovery',
        artist_id: 1
    },
    {//2
        name: 'ASCEND',
        artist_id: 2
    },
    {//3
        name: 'Led Zeppelin IV',
        artist_id: 3
    }
]
    

const seedAlbum = () => Album.bulkCreate(AlbumData);

module.exports = seedAlbum;