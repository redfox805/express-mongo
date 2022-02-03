const express = require('express')
const routesBarang = express.Router()
const Barang = require('./model_barang')

routesBarang.get('/list', async (_, res) => {
    try {
        let barang_list = await Barang.find()
        res.status(200).json({ data: barang_list })
    }
    catch (err) {
        res.status(400).json({ message: err.message })
    }
})

routesBarang.get('/akun-penjual/:value', async (req, res) => {
    try {
        let barang_list = await Barang.find({ namaAkunPenjual: req.params.value })
        res.status(200).json({ data: barang_list })
    }
    catch (err) {
        res.status(400).json({ message: err.message })
    }
})

routesBarang.get('/alamat-kirim/:value', async (req, res) => {
    try {
        let barang_list = await Barang.find({ alamatKirim: req.params.value })
        res.status(200).json({ data: barang_list })
    }
    catch (err) {
        res.status(400).json({ message: err.message })
    }
})

routesBarang.get('/status/:value', async (req, res) => {
    try {
        let barang_list = await Barang.find({ status: req.params.value })
        res.status(200).json({ data: barang_list })
    }
    catch (err) {
        res.status(400).json({ message: err.message })
    }
})

routesBarang.get('/:barang_id', async (req, res) => {
    try {
        let barang = await Barang.findOne({
            _id: req.params.barang_id
        })
        if (barang) res.status(200).json({ data: barang })
        else res.status(400).json({ message: 'wrong id' })
    }
    catch (err) {
        res.status(400).json({ message: err.message })
    }
})

routesBarang.post('/', async (req, res) => {
    try {
        let barang = new Barang(req.body)
        barang = await barang.save()
        res.status(200).json({ data: barang })
    }
    catch (err) {
        res.status(400).json({ message: err.message })
    }
})

routesBarang.put('/:barang_id', async (req, res) => {
    try {
        let barang = await Barang.findByIdAndUpdate(
            req.params.barang_id,
            req.body,
            { new: true }
        )
        if (barang) res.status(200).json({ data: barang })
        else res.status(400).json({ message: 'wrong id' })
    }
    catch (err) {
        res.status(400).json({ message: err.message })
    }
})

routesBarang.delete('/:barang_id', async (req, res) => {
    try {
        let barang = await Barang.findByIdAndRemove(req.params.barang_id)
        if (barang) res.status(200).json({ data: req.params.barang_id })
        else res.status(400).json({ message: 'wrong id' })
    }
    catch (err) {
        res.status(400).json({ message: err.message })
    }
})


module.exports = routesBarang;