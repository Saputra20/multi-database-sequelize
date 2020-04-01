require('express-group-routes');
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const con_deliserdang = require('./config/db_deliserdang');
const con_medan = require('./config/db_medan');

// const deliserdangController = require('./controllers/deliserdang/userController');
// const medanController = require('./controllers/medan/userController');
const transactionController = require('./controllers/deliserdang/transactionController');

var deliserdang = con_deliserdang.sequelize;
var medan = con_medan.sequelize;

deliserdang.authenticate()
    .then(() => console.log('Connected To Database Deliserdang'))
    .catch(err => console.log('Error:' + err));

medan.authenticate()
    .then(() => console.log('Connected To Database Medan'))
    .catch(err => console.log('Error:' + err));

app.use(morgan('dev'));
app.disable('etag');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.group("/api/v1/deliserdang", (router) => {
    // router.use('/deliserdang', deliserdangController);
    // router.use('/medan', medanController);
    router.use('/transactions', transactionController);
});

app.get('/', (req, res) => {
    console.log('wellcome');
    res.json({
        message: "wellcome"
    });
});


module.exports = app