const router = require('express').Router();
const { Artist, Album, Song } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/rap', withAuth, async (req, res) => {
    try {
        console.log(1)
        const genreData = await Artist.findAll({
            where: {
                genre: 'rap'
            }
        });
        console.log(1)
        const mapGenre = genreData.map((genre) => genre.get({ plain: true}));//chang users to post
        
        res.status(200).json(mapGenre)
        
    } catch (err) {
        res.status(500).json(err)
    }
});

module.exports = router;
