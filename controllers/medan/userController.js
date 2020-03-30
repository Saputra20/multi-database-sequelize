const express = require('express')
const router = express.Router()
const user = require('../../models/medan/user')

router.get('/', (req, res) => {
    user.findAll().then(users => {
        res.json({
            users
        });
    }).catch(err => console.log(err));
});

module.exports = router