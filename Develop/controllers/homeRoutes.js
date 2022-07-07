const router = require('express').Router();
const {Artist} = require('../models')

router.get('/', async (req, res) => {
    try {
        if (req.session.logged_in) {
            res.redirect('/dashboard');
            return
        }
        res.render('login');
    } catch (err) {
        res.status(500).json(err)
    }
});

router.get('/signup', async (req, res) => {
    try {
        if (req.session.logged_in) {
            res.redirect('/dashboard');
            return
        }
        res.render('signup');
    } catch (err) {
        res.status(500).json(err)
    }
});

router.get('/dashboard', async (req, res) => {
    try {
        if (!req.session.logged_in) {
            res.redirect('/login');
            return
        }
        res.render('dashboard');
    } catch (err) {
        res.status(500).json(err)
    }
});

module.exports = router