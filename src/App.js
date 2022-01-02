import './App.css';
import List from './components/List';
import React, { useState, useEffect } from 'react';

function App() {
  // Adds lists
  const [lists, setLists] = useState([]);

  const click = event => {
    setLists(lists.concat(<List key={lists.length} />));
  };
  // End

  // Function to get the current date
  function getDate() {
    var currentDate = new Date();
    return currentDate.getMonth() + "/" + currentDate.getDate();
  }


  // Updates time
  var currentDate = new Date();
  const [time, setTime] = useState(currentDate.getHours() + ":" + currentDate.getMinutes());

  useEffect(() => {
    setInterval(() => {
      var currentDate = new Date();
      setTime(currentDate.getHours() + ":" + currentDate.getMinutes());
    }, 1000);
  }, []);
  // End

  return (
    <div className="App">
      <div id="heading">
        <h2>{getDate()}</h2>
        <h2>{time}</h2>
      </div>

      <button onClick={click} className='add-list'>Add List</button>

      <div className='lists'>
        {lists}
      </div>
    </div>
  );
}

export default App;
