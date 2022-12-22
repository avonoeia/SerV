const db = require('./db')
const config = require('../config')

async function getAllMenuItems(req, res) {
    const query = `SELECT * FROM Items left join (SELECT count(*) as num_sold, item_name as T1_item_name FROM Prev_orders GROUP BY item_name) as T1 on T1.T1_item_name = Items.item_name;`
    const rows2 = await db.query(query)

    const date = new Date()

    res.status(200).json([...rows2])
}

async function menuOnly(req, res) {
    const rows = db.query("SELECT * FROM Items")
    console.log(rows)
    res.status(200).json([...rows])
}

async function addNewItem(req, res) {
    const { item_name, item_type, description, price } = req.body
    const rows = await db.query(`INSERT INTO Items (item_name, item_type, description, price) VALUES ("${item_name}", "${item_type}", "${description}", ${price})` )
    res.status(200).json(rows)
}

module.exports = {
    getAllMenuItems,
    menuOnly,
    addNewItem
}