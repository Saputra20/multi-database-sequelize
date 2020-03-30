require('dotenv').config()
const Sequelize = require('sequelize')
var db = {}

const sequelize = new Sequelize(process.env.DB_DELISERDANG, process.env.DB_USERNAME_DELISERDANG, process.env.DB_PASSWORD_DELISERDANG, {
    host: process.env.DB_HOST_DELISERDANG,
    port: process.env.DB_PORT_DELISERDANG,
    dialect: 'mysql',
    logging: false
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db
