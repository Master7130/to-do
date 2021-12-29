import './App.css';
import List from './components/List';
import React, { useState } from 'react';

function App() {
  const [lists, setLists] = useState([]);

  const click = event => {
    setLists(lists.concat(<List key={lists.length} />));
  };

  return (
    <div className="App">
      <div id="heading">
        <h2>Date</h2>
        <h2>Time</h2>
      </div>

      <button onClick={click} className='add-list'>Add List</button>
      {lists}
    </div>
  );
}

export default App;
