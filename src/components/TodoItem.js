import { React, useState } from 'react';
import './TodoItem.css';

export default function TodoItem(props, name) {
    const [visibility, setVisibility] = useState(true)

    if (!visibility) {
        return (null)
    }


    return (
        <div className='list-item-container'>
            <div className='circle' onClick={() => setVisibility(false)}></div>
            <h3>{props.name}</h3>
        </div>
    )
}