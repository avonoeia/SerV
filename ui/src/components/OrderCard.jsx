import React, { useState, useEffect } from "react"

export default function OrderCard(props) {

    const orderedItems = props.data.item_ids.map(item => {
        const [item_name, count] = item.split("count")
        console.log(item_name, count)
    
        console.log(item_name)
        return (
            <div key={item_name} className="order-info">
                <div>{item_name}</div>
                <div>x{count}</div>
            </div>
        )
    })

    function handleClick() {
        const complete = async () => {
            const response = fetch(`/api/orders/${props.data.order_id}`, {
                method: 'DELETE'
            })
        
            props.dataSetter(prevData => {
                const newData = prevData.filter(element => element.order_id != props.data.order_id)
                console.log(newData)
                return [...newData]
            })
        }
        complete()
    }

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
            <button className="complete-button" onClick={handleClick}>Mark as completed</button>
        </div>
    )
}