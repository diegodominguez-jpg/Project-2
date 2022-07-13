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
    },
    {//4
        name:'Death Grips',
        genre:'Hip-Hop',
    },
    {//5
        name:'The Cars',
        genre:'Classic Rock',
    },
    {//6
        name:'Rage Against the Machine',
        genre:'Hard Rock',
    },
    {//7
        name:'Anthrax',
        genre:'Metal',
    },
    {//8
        name:'Bad Religion',
        genre:'Punk',
    },

    
]

const seedArtist = () => Artist.bulkCreate(artistData);

module.exports = seedArtist;