import React, { useState, useContext } from 'react'
import { TodoContext } from '../contexts/TodoContext'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Divider from '@material-ui/core/Divider';

const TodoList = () => {
  const { todo, setTodo } = useContext(TodoContext)

  const deleteTodo = index => {
    let newTodo = [...todo]
    newTodo.splice(index, 1)
    setTodo(newTodo)
  }

  const updateTodoStatus = index => {
    let newTodo = [...todo]
    newTodo[index].isComplete = !newTodo[index].isComplete
    setTodo(newTodo)
  }

  return (
    <List>
      {
        todo.map((value, index) => {
          return (
            <div key={`todo-${index}`}>
              <Divider />
              <ListItem>
                <ListItemIcon>
                  <Checkbox
                    id={`checkbox-${index}`}
                    color='primary'
                    onChange={() => updateTodoStatus(index)}
                  />
                </ListItemIcon>
                {
                  value.isComplete ?
                    <del><ListItemText primary={value.todo} /></del> :
                    <ListItemText primary={value.todo} />
                }
                <ListItemSecondaryAction>
                  <IconButton onClick={() => deleteTodo(index)}>
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            </div>
          )
        })
      }
    </List>
  )
}

export default TodoList