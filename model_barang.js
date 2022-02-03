const mongoose = require('mongoose')

const barangSchema = new mongoose.Schema(
    {
        namaBarang: String,
        namaAkunPenjual: String,
        status: String,
        hargaBarang: Number,
        ulasan: {
            nilaiUlasan: Number,
            jumlahUlasan: Number
        },
        jumlahTerjual: Number,
        alamatKirim: String,
        pranala: String
    },
    {
        collection: 'barang'        
    }
)

const Barang = mongoose.model('Barang', barangSchema)

module.exports = Barang;