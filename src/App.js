import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoList from './components/TodoList/TodoList';
import TodoInput from './components/TodoInput/TodoInput';


function App() {
  return (
    <div className="App" >
      <TodoList/>
      <TodoInput/>
    </div>
  );
}

export default App;
