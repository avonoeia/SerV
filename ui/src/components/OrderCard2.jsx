import React, { useState, useEffect } from "react"

export default function OrderCard(props) {

    const orderedItems = props.data.item_ids.map(item => {
        const [item_id, count] = item.split("count")
        console.log(item_id, count)
        const item_name = props.menuData.find(element => element.item_id == item_id)["item_name"]
        return (
            <div key={item_name} className="order-info">
                <div>{item_name}</div>
                <div>x{count}</div>
            </div>
        )
    })

    
    return (
        <div className="order-card">
            <div className="order-id-banner">{props.data.order_id}</div>
            <div className="order-info-container">
                { orderedItems }
            </div>
            <div className="order-type">
                <span>Order Type: </span>
                {props.data.order_type}
            </div>
        </div>
    )
}