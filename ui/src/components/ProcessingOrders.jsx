import React, { useState, useEffect } from "react"

import OrderCard from "./OrderCard"

export default function ProcessingOrders() {
    const [data, setData] = useState([])
    const [menuData, setMenuData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/api/orders/')
            const fetchedData = await response.json()

            if (response.ok) {
                setData(fetchedData)
            }
        }

        fetchData()
        console.log("useEffect ran")
    }, [])

    console.log("Data outside useEffect", data)

    const CardElements = data.map(element => <OrderCard key={element.order_id} data={element} dataSetter={setData} menuData={menuData} />)

    return (
        <>
        { 
            data.length > 0 ? (
                <div className="orders-container">
                    { CardElements }
                </div>
            ) : <div className="orders-container">There are no orders at the moment.</div>
        }
        </>
    )
}