import React from 'react';
import { ItemProvider } from './Context'
import './App.css';
import Example from './components/Example'
import Nav from './components/Nav'
import AddItem from './components/AddItem'



function App() {
  return (
    <ItemProvider>
      <div className="App">
        <Nav />
        <Example />
        <AddItem />
      </div>
    </ItemProvider>
  );
}

export default App;
