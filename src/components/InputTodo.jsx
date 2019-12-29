import React, { useState, useContext } from 'react'
import {TodoContext} from '../contexts/TodoContext'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import InputAdornment from '@material-ui/core/InputAdornment';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
	container: {
		padding: '2%',
	},
	inputField: {
		width: '100%'
	},
	inputButton: {
		padding: '1%'
	}
}))

const InputTodo = () => {
	const [buttonVariant, setButtonVariant] = useState('outlined')
  const {todo, setTodo} = useContext(TodoContext)
  const [task, setTask] = useState('')

  const addTodo = () => {
    let newTodo = [...todo]
    newTodo.push({
      todo: task,
      isComplete: false
    })
    setTodo(newTodo)
  }

  const handleKeyDown = e => {
    if (e.key === 'Enter') {
      addTodo(task)
    }
  }

	const classes = useStyles()

	return (
		<div className={classes.container}>
			<TextField
				id='todo' label='Todo'
        className={classes.inputField}
        value={task}
        onChange={e => setTask(e.target.value)}
        onKeyDown={e => handleKeyDown(e)}
				InputProps={{
					endAdornment:
						<InputAdornment>
							<Button
								variant={buttonVariant}
								color='primary'
								size='small'
                className={classes.inputButton}
                onClick={addTodo}
								onMouseEnter={() => setButtonVariant('contained')}
                onMouseLeave={() => setButtonVariant('outlined')}
							>
								Add
              </Button>
						</InputAdornment>
				}}
			/>
		</div>
	)
}

export default InputTodo