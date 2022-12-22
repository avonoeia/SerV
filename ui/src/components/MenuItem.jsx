import React from "react"

export default function MenuItem(props) {
    console.log(props)
    return (
        <div className="item-card">
            <div className="item-card-text">
                <h3 className="item-name">{ props.item_name }</h3>
                <p className="item-description">{ props.description }</p>
                <p className="price">from <span>{ props.price }</span></p>
            </div>
            <div className="item-card-stats">
                <span>{props.num_sold == null ? "0" : props.num_sold}</span>
                sold today
            </div>
        </div>
    )
}   