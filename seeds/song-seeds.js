const { Song } = require('../models');

const songData = [
    //Recovery Album by Eminem
    {
        name: 'Cold Wind Blows',
        album_id: 1,
        artist_id: 1
    },
    {
        name: 'Talkin\'2 Myself',
        album_id: 1,
        artist_id: 1
    },
    {
        name: 'On Fire',
        album_id: 1,
        artist_id: 1
    },
    {
        name: 'Won\'t Back Down',
        album_id: 1,
        artist_id: 1
    },
    {
        name: 'W.T.P',
        album_id: 1,
        artist_id: 1
    },
    {
        name: 'Going Through Changes',
        album_id: 1,
        artist_id: 1
    },
    {
        name: 'Not Afraid',
        album_id: 1,
        artist_id: 1
    },
    {
        name: 'Seduction',
        album_id: 1,
        artist_id: 1
    },
    {
        name: 'No Love',
        album_id: 1,
        artist_id: 1
    },
    {
        name: 'Space Bound',
        album_id: 1,
        artist_id: 1
    },
    {
        name: 'Cinderella Man',
        album_id: 1,
        artist_id: 1
    },
    {
        name: '25 To Life',
        album_id: 1,
        artist_id: 1
    },
    {
        name: 'So Bad',
        album_id: 1,
        artist_id: 1
    },
    {
        name: 'Almost Famous',
        album_id: 1,
        artist_id: 1
    },
    {
        name: 'Love The Way You Lie',
        album_id: 1,
        artist_id: 1
    },
    {
        name: 'You\'re Never Over',
        album_id: 1,
        artist_id: 1
    },
    {
        name: 'Untitled',
        album_id: 1,
        artist_id: 1
    },
    //ASCEND album by Illenium 
    {
        name: 'I Care',
        album_id: 2,
        artist_id: 2
    },
    {
        name: 'Hold On',
        album_id: 2,
        artist_id: 2
    },
    {
        name: 'Good Things Fall Apart',
        album_id: 2,
        artist_id: 2
    },
    {
        name: 'That\'s Why',
        album_id: 2,
        artist_id: 2
    },
    {
        name: 'Blood',
        album_id: 2,
        artist_id: 2
    },
    {
        name: 'Take You Down',
        album_id: 2,
        artist_id: 2
    },
    {
        name: 'All Together',
        album_id: 2,
        artist_id: 2
    },
    {
        name: 'Crashing',
        album_id: 2,
        artist_id: 2
    },
    {
        name: 'Broken Ones',
        album_id: 2,
        artist_id: 2
    },
    {
        name: 'Every Piece Of Me',
        album_id: 2,
        artist_id: 2
    },
    {
        name: 'Takeaway',
        album_id: 2,
        artist_id: 2
    },
    {
        name: 'Sad Songs',
        album_id: 2,
        artist_id: 2
    },
    {
        name: 'Pray',
        album_id: 2,
        artist_id: 2
    },
    {
        name: 'In Your Arms',
        album_id: 2,
        artist_id: 2
    },
    {
        name: 'Gorgeous',
        album_id: 2,
        artist_id: 2
    },
    {
        name: 'Angel - Lonely Prelude',
        album_id: 2,
        artist_id: 2
    },
    {
        name: 'Lonely',
        album_id: 2,
        artist_id: 2
    },
    //Led Zeppelin IV album by Led Zeppelin
    {
        name: 'Black Dog',
        album_id: 3,
        artist_id: 3
    },
    {
        name: 'Rock and Roll',
        album_id: 3,
        artist_id: 3
    },
    {
        name: 'The Battle of Evermore',
        album_id: 3,
        artist_id: 3
    },
    {
        name: 'Stairway to Heaven',
        album_id: 3,
        artist_id: 3
    },
    {
        name: 'Misty Mountain Top',
        album_id: 3,
        artist_id: 3
    },
    {
        name: 'Four Sticks',
        album_id: 3,
        artist_id: 3
    },
    {
        name: 'Going to California',
        album_id: 3,
        artist_id: 3
    },
    {
        name: 'When the Levee Breaks',
        album_id: 3,
        artist_id: 3
    },
]

const seedSong = () => Song.bulkCreate(songData);

module.exports = seedSong;