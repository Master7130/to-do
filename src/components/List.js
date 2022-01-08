import React, { useState } from 'react';
import './List.css'
import Modal from 'react-modal'
import TodoItem from './TodoItem';


export default function List(props, name) {

    // Adds lists
    const [lists, setLists] = useState([]);

    function click2(name) {
        var listName = document.getElementById("name-input").value;

        if (listName === "") {
            listName = "Item"
        }

        setLists(lists.concat(<TodoItem key={lists.length} name={listName} />));
        setModalOpen(false)
    }
    // End

    // Modal
    const [modalOpen, setModalOpen] = useState(false);
    // End

    return (
        <>
            <div className="list-container">
                <h1>{props.name}</h1>
                <div className='items'>
                    {lists}
                </div>

                <button onClick={() => setModalOpen(true)} className='add-list-item'>Add Item</button>
            </div>

            <Modal className="modal" isOpen={modalOpen} onRequestClose={() => setModalOpen(false)}>
                <h1>New To-do Item</h1>

                <div>
                    <p>Name</p>
                    <input id='name-input' type={"text"}></input>
                </div>

                <button onClick={() => click2("name")} className='confirm-item-btn'>Confirm</button>
                <button onClick={() => setModalOpen(false)} className='cancel-item-btn'>Cancel</button>
            </Modal>
        </>
    )
}
