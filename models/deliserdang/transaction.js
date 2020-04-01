var db = require('../../config/db_deliserdang')

sequelize = db.sequelize,
    Sequelize = db.Sequelize;
module.exports = sequelize.define('tbl_transaksi', {
    DeviceId: {
        type: Sequelize.STRING(255)
    },
    TrxId: {
        type: Sequelize.STRING(255)
    },
    TrxDate: {
        type: Sequelize.DATE
    },
    TrxAmount:
    {
        type: Sequelize.DOUBLE
    },
    TrxService:
    {
        type: Sequelize.DOUBLE
    },
    TrxTax:
    {
        type: Sequelize.DOUBLE
    },
    TaxType:
    {
        type: Sequelize.STRING(255)
    },
    RawData:
    {
        type: Sequelize.TEXT
    },
    Create_Date:
    {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
    },
    status: {
        type: Sequelize.STRING(20)
    }
}, {
    timestamps: false,
    tableName: 'tbl_transaksi'
});