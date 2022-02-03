const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const port = process.env.PORT || 3000
const atlasConfig = require('./atlas_config')
const routesBarang = require('./routes_barang')

// connect to mongo-db atlas
const dbUrl = atlasConfig.dbUrl
mongoose.connect(dbUrl).catch(err => console.log(err))

// router config
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use('/api/barang', routesBarang)

app.listen(port, () => {
    console.log(`running on ${port}`)
})