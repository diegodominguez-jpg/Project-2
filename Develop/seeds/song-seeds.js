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
    //Death Grips Steroids (Crouching Tiger Hidden Gabber Megamix)
    {
        name: 'Steroids (Crouching Tiger Hidden Gabber Megamix)',
        album_id: 4,
        artist_id: 4
    },
    {
        name: 'More Than the Fairy (featuring Les Claypool)',
        album_id: 4,
        artist_id: 4
    },
    {
        name: 'Electronic Drum Solo (Dub Mix)',
        album_id: 4,
        artist_id: 4
    },
    // The Cars: Shake it Up
    {
        name: 'Since Youre Gone',
        album_id: 5,
        artist_id: 5
    },
    {
        name: 'Shake it Up',
        album_id: 5,
        artist_id: 5
    },
    {
        name: 'Im Not The One',
        album_id: 5,
        artist_id: 5
    },
    {
        name: 'Victim of Love',
        album_id: 5,
        artist_id: 5
    },
    {
        name: 'Cruiser',
        album_id: 5,
        artist_id: 5
    },
    {
        name: 'A Dream Away',
        album_id: 5,
        artist_id: 5
    },
    {
        name: 'This Could Be Love',
        album_id: 5,
        artist_id: 5
    },
    {
        name: 'Think it Over',
        album_id: 5,
        artist_id: 5
    },
    {
        name: 'Maybe Baby',
        album_id: 5,
        artist_id: 5
    },
    //Rage Against the Machine 
    {
        name: 'Bombtrack',
        album_id: 6,
        artist_id: 6
    },
    {
        name: 'Killing in the Name',
        album_id: 6,
        artist_id: 6
    },
    {
        name: 'Take the Power Back',
        album_id: 6,
        artist_id: 6
    },
    {
        name: 'Settle For Nothing',
        album_id: 6,
        artist_id: 6
    },
    {
        name: 'Bullet in the Head',
        album_id: 6,
        artist_id: 6
    },
    {
        name: 'Know Your Enemy',
        album_id: 6,
        artist_id: 6
    },
    {
        name: 'Wake Up',
        album_id: 6,
        artist_id: 6
    },
    {
        name: 'Fistful of Steel',
        album_id: 6,
        artist_id: 6
    },
    {
        name: 'Township Rebellion',
        album_id: 6,
        artist_id: 6
    },
    {
        name: 'Freedom',
        album_id: 6,
        artist_id: 6
    },
    //Fistful of Metal
    {
        name: 'Deathrider',
        album_id: 7,
        artist_id: 7
    },
    {
        name: 'Metal Thrashing Mad',
        album_id: 7,
        artist_id: 7
    },
    {
        name: 'Im Eighteen',
        album_id: 7,
        artist_id: 7
    },
    {
        name: 'Panic',
        album_id: 7,
        artist_id: 7
    },
    {
        name: 'Subjugator',
        album_id: 7,
        artist_id: 7
    },
    {
        name: 'Soldiers of Metal',
        album_id: 7,
        artist_id: 7
    },
    {
        name: 'Death From Above',
        album_id: 7,
        artist_id: 7
    },
    {
        name: 'Anthrax',
        album_id: 7,
        artist_id: 7
    },
    {
        name: 'Across the River',
        album_id: 7,
        artist_id: 7
    },
    {
        name: 'Howling Furies',
        album_id: 7,
        artist_id: 7
    },
    //Suffer Bad Religion
    {
        name: 'You Are (The Government)',
        album_id: 8,
        artist_id: 8
    },
    {
        name: '1000 More Fools',
        album_id: 8,
        artist_id: 8
    },
    {
        name: 'How Much is Enough?',
        album_id: 8,
        artist_id: 8
    },
    {
        name: 'When?',
        album_id: 8,
        artist_id: 8
    },
    {
        name: 'Give You Nothing',
        album_id: 8,
        artist_id: 8
    },
    {
        name: 'Land of Competition',
        album_id: 8,
        artist_id: 8
    },
    {
        name: 'Forbidden Beat',
        album_id: 8,
        artist_id: 8
    },
    {
        name: 'Best For You',
        album_id: 8,
        artist_id: 8
    },
    {
        name: 'Suffer',
        album_id: 8,
        artist_id: 8
    },
    {
        name: 'Delirium of Disorder',
        album_id: 8,
        artist_id: 8
    },
    {
        name: 'Part II (The Numbers Game)',
        album_id: 8,
        artist_id: 8
    },
    {
        name: 'What Can You Do?',
        album_id: 8,
        artist_id: 8
    },
    {
        name: 'Do What You Want',
        album_id: 8,
        artist_id: 8
    },
    {
        name: 'Part IV (The Index Fossil)',
        album_id: 8,
        artist_id: 8
    },
    {
        name: 'Pessimistic Lines',
        album_id: 8,
        artist_id: 8
    },
]

const seedSong = () => Song.bulkCreate(songData);

module.exports = seedSong;