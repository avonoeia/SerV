import React, { useState } from "react"
import { Link } from "react-router-dom"
import "../App.css"

export default function Navbar() {
    const [selected, setSelected] = useState(`${window.location.href.split('/')[3]}`)
    console.log(window.location.href.split('/')[3])

    function handleClick(event) {
        setSelected(event.target.id)
    }

    return (
        <div className="navbar">
            <h1 className="navbar-header">SerV</h1>
            <hr className="navbar-break" />
            <Link to='/'><div className={selected == "" ? "navbar-options navbar-selected-option" : "navbar-options"} id="" onClick={handleClick}>Orders</div></Link>
            <Link to='/new-order'><div className={selected == "new-order" ? "navbar-options navbar-selected-option" : "navbar-options"} id="new-order" onClick={handleClick}>New order</div></Link>
            <Link to='/menu'><div className={selected == "menu" ? "navbar-options navbar-selected-option" : "navbar-options"} id="menu" onClick={handleClick}>Menu</div></Link>
        </div>
    )
}