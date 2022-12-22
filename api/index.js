const express = require('express')
const orderRoutes = require('./routes/orderRoutes')
const menuRoutes = require('./routes/menuRoutes')

const app = express()

app.use(express.json())

app.use('/api/orders', orderRoutes)

app.use('/api/menu', menuRoutes)

app.listen(4001, () => {
    console.log("Listening on port 4001")
})