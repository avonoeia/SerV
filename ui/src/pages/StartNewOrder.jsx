import React, { useState, useEffect } from "react"

import MenuItem2 from "../components/MenuItem2"

export default function StartNewOrder() {
    const [data, setData] = useState([])
    const [cart, setCart] = useState({
        phone: "",
        items: [], // [["item_name", count, price, item_id], ["item_name", count, price, item_id], ["item_name", count, price, item_id]]
        total_price: 0
    })
    console.log(cart)

    useEffect(() => {
        const fetchMenu = async () => {
            const response = await fetch('/api/menu')
            const fetchedData = await response.json()

            if (response.ok) {
                setData(fetchedData)
            }
        }

        fetchMenu()
        console.log("useEffect ran")
    }, [])
    console.log(data)
    function handleChange(event) {
        setCart(prevData => ({
            ...prevData,
            phone: event.target.value
        }))
    }

    const sides = data.filter(element => element.item_type.toLowerCase() == 'sides').map(side => <MenuItem2 item_id={side.item_id} click={setCart} key={side.item_name} item_name={side.item_name} description={side.description} price={side.price} />)
    const chickenSandwiches = data.filter(element => element.item_type.toLowerCase() == 'chicken sandwiches').map(chickenSandwich => <MenuItem2 item_id={chickenSandwich.item_id} click={setCart}  key={chickenSandwich.item_name}item_name={chickenSandwich.item_name} description={chickenSandwich.description} price={chickenSandwich.price} />)
    const beverages = data.filter(element => element.item_type.toLowerCase() == 'beverages').map(beverage => <MenuItem2 item_id={beverage.item_id} click={setCart}  key={beverage.item_name}item_name={beverage.item_name} description={beverage.description} price={beverage.price} />)

    function handleConfirm() {
        const postOrder = async () => {
            const response = await fetch('api/orders/new', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(cart)
            })

            if (response.ok) {
                setCart({
                    phone: "",
                    items: [],
                    total_price: 0
                })
                return "Success!"
            }
        }

        postOrder()
    }   

    return (
        <div className="page">
            <main className="new-order-main-content">
                <div className="menu-container">
                    <section className="item-type-sections new-order-selection">
                        <h2 className="item-type-header">Sides</h2>
                        <hr align="left" className="menu-break" />
                        <div className="items-container">
                            { sides }
                        </div>
                    </section>

                    <section className="item-type-sections new-order-selection">
                        <h2 className="item-type-header">Chicken Sandwiches</h2>
                        <hr align="left" className="menu-break" />
                        <div className="items-container">
                            { chickenSandwiches }
                        </div>
                    </section>

                    <section className="item-type-sections new-order-selection">
                        <h2 className="item-type-header">Beverages</h2>
                        <hr align="left" className="menu-break" />
                        <div className="items-container">
                            { beverages }
                        </div>
                    </section>
                </div>

                <section className="cart">
                    <div className="cart-header">
                        New Order
                    </div>
                    <hr className="menu-break" />
                    <form className="cart-form">
                        <div className="cart-form-box">
                            <label htmlFor="customer-phone">
                                Phone:
                            </label>
                            <input className="cart-form-input" type="text" id="phone" value={cart.phone} onChange={handleChange} required />
                        </div>
                    </form>
                    <hr className="cart-break" />
                    
                    {cart.items.length > 0 ? (
                        <div className="table-container">
                            <div className="cart-table">
                                <div className="cart-table-item-name">Items</div>
                                <div className="cart-table-item-count">Count</div>
                                <div className="cart-table-item-price">Price</div>
                            </div>
                            { cart.items.map(item => (
                                <div key={item[0]} className="cart-table">
                                    <div className="cart-table-item-name">{item[0]}</div>
                                    <div className="cart-table-item-count">{item[1]}</div>
                                    <div className="cart-table-item-price">{item[2]}</div>
                                </div>
                            )) }
                        </div>
                    ) : 
                    (
                        <div>No items</div>
                    )}
                    <hr className="cart-break" />
                    <div className="cart-table">
                        <div className="cart-table-item-name">Total</div>
                        <div className="cart-table-item-price">{cart.total_price}</div>
                    </div>
                    <button className="add-new-item" onClick={handleConfirm}>Confirm</button>
                </section>
                

            </main>
        </div>
    )
}