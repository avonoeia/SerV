import React, { useState, useEffect } from "react"

import CreateMenuItem from "../components/CreateMenuItem"
import MenuItem from "../components/MenuItem"

export default function Menu() {
    const [data, setData] = useState([])
    const [addItemForm, setAddItemForm] = useState(false)
    
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
    const sides = data.filter(element => element.item_type.toLowerCase() == 'sides').map(side => <MenuItem key={side.item_name} num_sold={side.num_sold} item_name={side.item_name} description={side.description} price={side.price} />)
    const chickenSandwiches = data.filter(element => element.item_type.toLowerCase() == 'chicken sandwiches').map(chickenSandwich => <MenuItem  key={chickenSandwich.item_name} num_sold={chickenSandwich.num_sold} item_name={chickenSandwich.item_name} description={chickenSandwich.description} price={chickenSandwich.price} />)
    const beverages = data.filter(element => element.item_type.toLowerCase() == 'beverages').map(beverage => <MenuItem  key={beverage.item_name} num_sold={beverage.num_sold} item_name={beverage.item_name} description={beverage.description} price={beverage.price} />)


    return (
        <>
        {
            addItemForm ? (
                <>
                    <div className="page-deselected page">
                    <div className="page-top">
                        <h1>Menu</h1>
                        <button className="add-new-item">Add Item</button>
                    </div>
                    <main className="main-content">
                        <section className="item-type-sections">
                            <h2 className="item-type-header">Sides</h2>
                            <hr align="left" className="menu-break" />
                            <div className="items-container">
                                { sides }
                            </div>
                        </section>

                        <section className="item-type-sections">
                            <h2 className="item-type-header">Chicken Sandwiches</h2>
                            <hr align="left" className="menu-break" />
                            <div className="items-container">
                                { chickenSandwiches }
                            </div>
                        </section>

                        <section className="item-type-sections">
                            <h2 className="item-type-header">Beverages</h2>
                            <hr align="left" className="menu-break" />
                            <div className="items-container">
                                { beverages }
                            </div>
                        </section>
                    </main>
                    </div>
                    <CreateMenuItem stateSetter={() => setAddItemForm(prevData => !prevData)} menuData={(newItem) => setData(prevData => [...prevData, newItem])}/>
                </>
            ) : (
                <div className="page">
                <div className="page-top">
                    <h1>Menu</h1>
                    <button className="add-new-item" onClick={() => setAddItemForm(prevData => !prevData)}>Add Item</button>
                </div>
                <main className="main-content">
                    <section className="item-type-sections">
                        <h2 className="item-type-header">Sides</h2>
                        <hr align="left" className="menu-break" />
                        <div className="items-container">
                            { sides }
                        </div>
                    </section>

                    <section className="item-type-sections">
                        <h2 className="item-type-header">Chicken Sandwiches</h2>
                        <hr align="left" className="menu-break" />
                        <div className="items-container">
                            { chickenSandwiches }
                        </div>
                    </section>

                    <section className="item-type-sections">
                        <h2 className="item-type-header">Beverages</h2>
                        <hr align="left" className="menu-break" />
                        <div className="items-container">
                            { beverages }
                        </div>
                    </section>
                </main>
                </div>
            )
        }
        </>
    )
}