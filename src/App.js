import React from 'react';
import './App.css';
//Importing components
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
     <header>My React To-Do-List</header>
     <Form />
     <TodoList />
    </div>
  );
}

export default App;
