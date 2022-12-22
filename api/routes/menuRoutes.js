const express = require('express')
const router = express.Router()
const { getAllMenuItems, menuOnly, addNewItem } = require('../services/menu')

router.get('/menu/only', menuOnly)

router.get('/', getAllMenuItems)

router.post('/', addNewItem)

module.exports = router