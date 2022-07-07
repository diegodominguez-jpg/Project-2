const Album = require('./Album');
const Artist = require('./Artist');
const Song = require('./Song');
const User = require('./User');

// Song.belongsTo(Album, {
//   foreignKey: 'album_id'
// });

// Album.hasMany(Song, {
//   foreignKey: 'album_id',
//   onDelete: 'CASCADE'
// });

Album.belongsTo(Artist, {
  foreignKey: 'artist_id'
});

Artist.hasMany(Album, {
  foreignKey: 'artist_id',
  onDelete: 'CASCADE'
});

module.exports = { Album, Artist, Song, User };
