const express = require('express')
const router = express.Router()
const transactionModel = require('../../models/deliserdang/transaction');

router.get('/', (req, res) => {
    transactionModel.findAll().then(transactions => {
        res.json({
            transactions
        });
    }).catch(err => console.log(err));
});

router.post('/', (req, res) => {
    var deviceId = req.body.deviceId
    var trxId = req.body.trxId
    var trxDate = req.body.trxDate
    var trxAmount = req.body.trxAmount
    var trxService = req.body.trxService
    var trxTax = req.body.trxTax
    var taxType = req.body.taxType
    var rawData = req.body.rawData
    var status = req.body.status
    transactionModel.create({
        DeviceId: deviceId,
        TrxId: trxId,
        TrxDate: trxDate,
        TrxAmount: trxAmount,
        TrxService: trxService,
        TrxTax: trxTax,
        TaxType: taxType,
        RawData: rawData,
        status: status
    });
    res.json({
        message: "Success created transaction",
    });
});

module.exports = router