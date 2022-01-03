import './App.css';
import List from './components/List';
import React, { useState, useEffect } from 'react';
import Modal from 'react-modal'

Modal.setAppElement('#root');
function App() {
  // Adds lists
  const [lists, setLists] = useState([]);

  function click2(name) {
    var listName = document.getElementById("name-input").value;

    if (listName === "") {
      listName = "List"
    }

    setLists(lists.concat(<List key={lists.length} name={listName} />));
    setModalOpen(false)
  }
  // End


  // Function to get the current date
  function getDate() {
    var currentDate = new Date();
    return currentDate.getMonth() + 1 + "/" + currentDate.getDate();
  }
  // End


  // Updates time
  var currentDate = new Date();

  var currentTime = currentDate.getHours() + ":" + currentDate.getMinutes()
  if (currentDate.getMinutes < 10) {
    currentTime = currentDate.getHours() + ":0" + currentDate.getMinutes()
  }
  const [time, setTime] = useState(currentTime);


  useEffect(() => {
    setInterval(() => {
      var currentDate = new Date();
      setTime(currentDate.getHours() + ":" + currentDate.getMinutes());
    }, 1000);
  }, []);
  // End


  // Modal
  const [modalOpen, setModalOpen] = useState(false);
  // End

  return (
    <div className="App">
      <div id="heading">
        <h2>{getDate()}</h2>
        <h2>{time}</h2>
      </div>

      <button onClick={() => setModalOpen(true)} className='add-list-btn'>Add List</button>


      <div className='lists'>
        {lists}
      </div>

      <Modal className="modal" isOpen={modalOpen} onRequestClose={() => setModalOpen(false)}>
        <h1>New To-do List</h1>

        <div>
          <p>Name</p>
          <input id='name-input' type={"text"}></input>
        </div>

        <button onClick={() => click2("name")} className='confirm-list-btn'>Confirm</button>
        <button onClick={() => setModalOpen(false)} className='cancil-list-btn'>Cancel</button>
      </Modal>
    </div>
  );
}

export default App;
