
const express = require('express')
const app = express()
const path = require("path")
require('dotenv').config()
const cors = require('cors')
const port = process.env.PORT||process.env.SERVER_PORT
//const {SERVER_PORT} = process.env
const {seed, getCountries, getCities, createCity, deleteCity} = require('./controller.js')

app.use(express.json())
app.use(cors())

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname,'../travel-journal/public/index.html'))
})

app.use(express.json())

app.use('/js', express.static(path.join(__dirname, '../travel-journal/public/index.js')))
app.use('/styles', express.static(path.join(__dirname, '../travel-journal/public/index.css')))

app.listen(port, ()=>{
    console.log("Listening on port "+port)
})


// DEV
app.post('/seed', seed)

// COUNTRIES
app.get('/countries', getCountries)

// CITIES
app.post('/cities', createCity)
app.get('/cities', getCities)
app.delete('/cities/:id', deleteCity)

//app.listen(SERVER_PORT, () => console.log(`up on ${SERVER_PORT}`))