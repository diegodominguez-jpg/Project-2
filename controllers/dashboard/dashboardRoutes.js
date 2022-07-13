const router = require('express').Router();
const { User, Song, Artist, Album, Playlist } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try {
        if (!req.session.logged_in) {
            res.redirect('/');
            return
        }
        res.render('dashboard', {
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err)
    }
});

router.get('/profile', withAuth, async (req, res) => {
    try {
        const playlistData = await Playlist.findAll({
            limit: 20,
            where: {
                user_id: req.session.user_id,
            },
            include: [
                {
                    model: Song,
                    attributes: ['name']
                }
            ]
        });

        const playlist = playlistData.map((song) => song.get({ plain: true}));//chang users to post
       console.log(playlist)
        res.render('profile', {
            playlist,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err)
    }
});

router.get('/discover', async (req, res) => {
    try {
        const musicData = await Song.findAll({
            attributes: ['name'],
            include: [
                {
                    model: Album,
                    attributes: ['name']
                },
                {
                    model: Artist,
                    attributes: ['name']
                }
            ]
        });
        
        
        const song = musicData.map((song) => song.get({ plain: true}));
        console.log(song)

        const eminem = song.filter((each) => {
            return each.artist.name == 'Eminem'
        });
        const illenium = song.filter((each) => {
            return each.artist.name == 'Illenium'
        });
        const ledZep = song.filter((each) => {
            return each.artist.name == 'Led Zeppelin'
        });
        
        res.render('discover', {
            eminem,
            illenium,
            ledZep,
            logged_in: req.session.logged_in
        }
       )
    } catch (err) {
        res.status(500).json(err)
    }
});

router.get('/cart', async (req, res) => {
    try {
        res.render('cart', {
            logged_in: req.session.logged_in
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router