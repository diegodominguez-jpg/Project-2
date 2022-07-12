const Album = require('./Album');
const Artist = require('./Artist');
const Song = require('./Song');
const User = require('./User');
const Playlist = require('./Playlist');

Song.belongsTo(Album, {
  foreignKey: 'album_id'
});

Album.hasMany(Song, {
  foreignKey: 'album_id',
  onDelete: 'CASCADE'
});

Song.belongsTo(Artist, {
  foreignKey: 'artist_id'
});

Artist.hasMany(Song, {
  foreignKey: 'artist_id',
  onDelete: 'CASCADED'
})

Album.belongsTo(Artist, {
  foreignKey: 'artist_id'
});

Artist.hasMany(Album, {
  foreignKey: 'artist_id',
  onDelete: 'CASCADE'
});

Playlist.belongsTo(User, {
  foreignKey: 'user_id'
});

User.hasMany(Playlist, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Playlist.belongsTo(Song, {
  foreignKey: 'song_id'
});

Song.hasMany(Playlist, {
  foreignKey: 'song_id',
  onDelete: 'CASCADE'
});



module.exports = { Album, Artist, Song, User, Playlist };
