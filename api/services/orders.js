const db = require('./db')
const config = require('../config')

async function getAllOrders(req, res) {
    const rows = await db.query('SELECT * FROM Orders')
    res.status(200).json([...rows])
}

async function postNewOrder(req, res) {
    const { phone, items, total_price } = req.body
    console.log(phone)
    const user = await db.query(`SELECT * FROM Customers WHERE phone = '${phone}'`)
    console.log(user)

    const item_ids = items.map(item => `"${item[0]}count${item[1]}"`)
    console.log(item_ids)

    if (user.length > 0) {
        const query = `INSERT INTO Orders (customer_id, item_ids, total_price, order_type) VALUES (${user[0].customer_id}, '[${item_ids}]', ${total_price}, 'Dine-in');`
        console.log(query)
        const rows = await db.query(query)
        res.status(200).json({ "message": "Success!" })
    } else {
        const query = `INSERT INTO Orders (customer_id, item_ids, total_price, order_type) VALUES (1, '[${item_ids}]', ${total_price}, 'Dine-in');`
        const rows = await db.query(query)
        res.status(200).json({ "message": "Success!" })
    }
}




















async function completeOrder(req, res) {
    const { order_id } = req.params
    const date = new Date()
    console.log(date)
    const row = await db.query(`SELECT * FROM Orders WHERE order_id=${order_id}`)
    order = row[0]
    console.log(order)
    console.log(order.item_ids.length)

    for (let i = 0; i < order.item_ids.length; i++) {
        const [item_name, count] = order.item_ids[i].split("count")
        for (let j = 0; j < count; j++) {
            const query = `INSERT INTO Prev_orders(order_id, customer_id, item_name, price, order_type, day_of_order) VALUES (${order_id}, ${order.customer_id}, "${item_name}", 0, "${order.order_type}", "${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}")`
            console.log(query)
            const row = await db.query(query)
        }
    }

    const deletedRow = await db.query(`DELETE FROM Orders WHERE order_id=${order_id}`)
    res.status(200).json({ "message": "Success!" })
}

async function getPrevOrders(req, res) {
    console.log("Hello from Prev Orders")
    const rows = await db.query(`SELECT * FROM Prev_orders`)
    res.status(200).json([...rows])
}



module.exports = {
    getAllOrders,
    postNewOrder,
    getPrevOrders,
    completeOrder
}