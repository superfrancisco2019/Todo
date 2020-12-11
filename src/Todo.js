import React from 'react'
import './Todo.css'

function Todo(props) {
    return (
        <div>
            <li className='todo__list'>{props.text}</li>
        </div>
    )
}

export default Todo
