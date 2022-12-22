const express = require('express')
const router = express.Router()
const { getAllOrders, postNewOrder, getPrevOrders, completeOrder } = require('../services/orders')


router.get('/prev-orders/', getPrevOrders)

router.get('/', getAllOrders)

router.post('/new', postNewOrder)

/* Order page calls */

router.delete('/:order_id', completeOrder)

module.exports = router