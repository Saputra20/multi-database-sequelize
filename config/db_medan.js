require('dotenv').config()
const Sequelize = require('sequelize')
var db = {}

const sequelize = new Sequelize(process.env.DB_MEDAN, process.env.DB_USERNAME_MEDAN, process.env.DB_PASSWORD_MEDAN, {
    host: process.env.DB_HOST_MEDAN,
    port: process.env.DB_PORT_MEDAN,
    dialect: 'mysql',
    logging: false
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db
