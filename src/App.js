import React, { useState, useMemo } from 'react';
import { TodoContext } from './contexts/TodoContext'
import InputTodo from './components/InputTodo'
import TodoList from './components/TodoList'
import Paper from '@material-ui/core/Paper';
import './App.css';

const App = () => {
  const [todo, setTodo] = useState([
    {
        'todo': 'create todo list',
        'isComplete': false
    }
  ])

  const todoProvider = useMemo(() => ({ todo, setTodo }), [todo, setTodo])
  
  return (
    <Paper elevation={2}>
      <TodoContext.Provider value={todoProvider}>
        <InputTodo />
        <TodoList />
      </TodoContext.Provider>
    </Paper>
  )
}

export default App;
