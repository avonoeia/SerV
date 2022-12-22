import React, { useState, useEffect } from "react"

import OrderCard2 from "./OrderCard2"

export default function CompletedOrders() {
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/api/orders/prev-orders/')
            const fetchedData = await response.json()
            console.log(fetchedData)

            if (response.ok) {
                setData(fetchedData)
            }
        }

        fetchData()
        console.log("useEffect ran")
    }, [])

    console.log("Data outside useEffect", data)

    return (
        <div className="orders-container">
            <OrderCard2 data={data[0]} />
        </div>
    )
}