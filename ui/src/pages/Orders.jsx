import React from "react"
import "../App.css"

/* Importing components */
import ProcessingOrders from "../components/ProcessingOrders"
import CompletedOrders from "../components/CompletedOrders"

export default function Orders() {
    const [toggle, setToggle] = React.useState("processing")

    function handleClick(event) {
        setToggle(event.target.id)
    }

    return (
        <div className="page">
            <div className="page-top">
                <h1>
                    Orders
                    <hr className="orders-break" />
                </h1>
            </div> 
            <ProcessingOrders />
        </div>
    )
}