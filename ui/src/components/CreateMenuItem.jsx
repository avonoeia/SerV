import React, { useState } from "react"

export default function CreateMenuItem(props) {
    const [data, setData] = useState({
        item_name: "",
        item_type: "",
        description: "",
        price: 0
    })
    console.log(props)

    function handleChange(event) {
        setData(prevData => {
            return {
            ...prevData,
            [event.target.name]: event.target.value
            }
        })
    }

    async function handleSubmit(event) {
        event.preventDefault()

        const postData = async () => {
            const url = '/api/menu'
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })

            return response.json()
        }
        
        const newData = await postData()
        console.log(newData)
        props.menuData({...data, item_id: newData.insertId})
        props.stateSetter()
    }

    return (
        <form className="create-menu-item-form" onSubmit={handleSubmit}>
            <label htmlFor="item_name" className="new-item-field">
                <span>Item Name: </span> <input className="input-element" type="text" name="item_name" value={data.item_name} onChange={handleChange} />
            </label>
            <label htmlFor="item_type" className="new-item-field">
                <span>Item Type: </span> <input className="input-element" type="text" name="item_type" value={data.item_type} onChange={handleChange} />
            </label>
            <label htmlFor="description" className="new-item-field">
                <span>Description: </span> <textarea className="input-element" rows="50" type="text" name="description" value={data.description} onChange={handleChange} />
            </label>
            <label htmlFor="price" className="new-item-field">
                <span>Price: </span> <input className="input-element" type="number" name="price" value={data.price} onChange={handleChange} />
            </label>
            <button className="add-new-item">Confirm</button>
        </form>
    )
}