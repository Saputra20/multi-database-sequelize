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

router.post('/', (req, res) => {
    var name = req.body.name
    var email = req.body.email
    var age = req.body.age
    var address = req.body.address
    userModel.create({
        name: name,
        email: email,
        age: age,
        address: address
    });
    res.json({
        message: "Success created users",
    });
});

module.exports = router