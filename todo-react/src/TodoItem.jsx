import React from "react";

export function TodoItem({ completed, id, title, deleteTodo, toggleTodo }) {
    return (
        <li key={id}>
            <label>
                <input
                    type='checkbox'
                    checked={completed}
                    onChange={e => toggleTodo(id, e.target.checked)}
                />
                {title}
            </label>
            <button
                className='btn btn-danger'
                onClick={() => deleteTodo(id)}>
                Remove
            </button>
        </li>
    );
}