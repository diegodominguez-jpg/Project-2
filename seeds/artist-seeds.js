const { Artist } = require('../models');

const artistData = [
    {//1
        name: 'Eminem',
        genre: 'rap'
    },
    {//2
        name: 'Illenium',
        genre: 'edm'
    },
    {//3
        name: 'Led Zeppelin',
        genre: 'rock'
    }
]

const seedArtist = () => Artist.bulkCreate(artistData);

module.exports = seedArtist;