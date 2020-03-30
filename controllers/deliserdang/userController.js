const express = require('express')
const router = express.Router()
const userModel = require('../../models/deliserdang/user');

router.get('/', (req, res) => {
    userModel.findAll().then(users => {
        res.json({
            users
        });
    }).catch(err => console.log(err));
});

module.exports = router