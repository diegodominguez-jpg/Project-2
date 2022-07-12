const router = require('express').Router();
const { Artist, Album, Song } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/:genre', withAuth, async (req, res) => {
    try {
        const genreData = await Artist.findAll({
            attributes: ['id'],
            where: {
                genre: req.params.genre
            }
        });
        
        const mapGenre = genreData.map((genre) => genre.get({ plain: true}));//chang users to post
        const artistId = [...mapGenre]
        const songData = await Song.findAll({
            attributes: ['name'],
            where: {
                artist_id: artistId[0].id
            }
        })
        const mapSong = songData.map((song) => song.get({ plain: true}));
        res.status(200).json(songData)
        
    } catch (err) {
        res.status(500).json(err)
    }
});

module.exports = router;
