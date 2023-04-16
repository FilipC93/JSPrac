import React, { useState } from "react";

export function NewForm({ onSubmit }) {
    const [newItem, setNewItem] = useState('');

    const handleItem = e => {
        setNewItem(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (newItem === '') return
        onSubmit(newItem)
        setNewItem('')
    }

    return (

        <form onSubmit={handleSubmit} className='new-item-form'>
            <div>
                <label htmlFor='item'>New Item</label>
                <input
                    value={newItem}
                    onChange={handleItem}
                    type='text'
                    id='item'
                />
            </div>
            <button className='btn'>Add</button>
        </form>
    );
}