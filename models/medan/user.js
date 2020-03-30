var db = require('../../config/db_medan')

sequelize = db.sequelize,
    Sequelize = db.Sequelize;
module.exports = sequelize.define('users', {
    name: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    age: {
        type: Sequelize.STRING
    },
    address:
    {
        type: Sequelize.STRING
    }
}, {
    timestamps: false,
    tableName: 'users'
});