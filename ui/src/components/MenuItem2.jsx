import React from "react"

export default function MenuItem(props) {
    console.log(props.item_id)
    function handleAdd() {
        props.click(prevData => {
            let newItems = prevData.items
            const flag = newItems.findIndex(data => data[0] === props.item_name)

            if (flag != -1) {
                newItems[flag][1] += 1
                newItems[flag][2] += props.price
            } else {
                newItems.push([props.item_name, 1, props.price, props.item_id])
            }

            return {
                ...prevData,
                items: [...newItems],
                total_price: prevData.total_price += (props.price)
            }
        })
    }

    function handleRemove() {
        props.click(prevData => {
            const newItems = prevData.items.filter(item => item[0] != props.item_name)
            const newTotal = prevData.total_price - props.price
            return {
                ...prevData,
                items: newItems,
                total_price: newTotal
            }
        })
    }

    return (
        <div className="item-card">
            <div className="item-card-text">
                <h3 className="item-name">{ props.item_name }</h3>
                <p className="item-description">{ props.description }</p>
                <p className="price">from <span>{ props.price }</span></p>
            </div>
            <div className="item-card-actions">
                <span onClick={handleAdd}>+</span>
                <span onClick={handleRemove}>-</span>
            </div>
        </div>
    )
}   