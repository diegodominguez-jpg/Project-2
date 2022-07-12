const router = require('express').Router();
const { Artist, Album, Song, Playlist } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/playlist', withAuth, async (req, res) => {
    try {
        const playlistData = await Playlist.findAll({
            attributes: ['song_id'],
            where: {
                user_id: req.session.user_id,
            },
        });
        const playlist = playlistData.map((song) => song.get({ plain: true}));//chang users to post
        res.status(200).json(playlist)
    } catch (err) {
        res.status(500).json(err)
    }
});

router.get('/:genre', withAuth, async (req, res) => {
    try {
        const genreData = await Artist.findAll({
            attributes: ['id', 'name'],
            where: {
                genre: req.params.genre
            }
        });
        
        const mapGenre = genreData.map((genre) => genre.get({ plain: true}));//chang users to post
        const songData = await Song.findAll({
            attributes: ['name'],
            where: {
                artist_id: mapGenre[0].id
            },
            include: [
                {
                    model: Artist,
                    attributes: ['name']
                }
            ]
        })
        const mapSong = songData.map((song) => song.get({ plain: true}));
        res.status(200).json(mapSong)
    } catch (err) {
        res.status(500).json(err)
    }
});

router.post('/checkout', withAuth, async (req, res) => {
    try {
        const data = []
        for (let i =0; i< req.body.cart.length; i++) {
            const song_id = req.body.cart[i]
            const user_id = req.session.user_id
            data.push({song_id, user_id})
        }
        const response = await Playlist.bulkCreate(data)
        res.status(200).json(response)
    } catch (err) {
      res.status(500).json(err)
    }
});

router.delete('/delete', withAuth, async (req, res) => {
    try {
        console.log(req)
      const playlistData = await Playlist.destroy({
        where: {
            user_id: req.session.user_id,
            song_id: req.body.song_name
        },
      });
      
      res.status(200).json(playlistData);
    } catch (err) {
      res.status(500).json(err);
    }
  });



module.exports = router;
