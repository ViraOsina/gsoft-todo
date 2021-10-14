import React from 'react';
import { TodoItem, DeleteBtn } from './StyledComponents';
import Delete from './trash.png';
import { useDispatch } from 'react-redux';
import { toggleComplete, deleteTodo } from '../redux/todoReducer';

const Todo = ({ title, id, completed }) => {
    const dispatch = useDispatch();

	const handleCheckboxClick = () => {
		dispatch(toggleComplete({ id, completed: !completed }));
	};

	const handleDeleteClick = () => {
		dispatch(deleteTodo({ id }));
	};

    return (

          <TodoItem>
            <input
              style={{ marginRight: '10px' }}
              type="checkbox"
              checked={completed}
              onChange={handleCheckboxClick}
              
            />

            {title}
            
            <DeleteBtn 
            onClick={handleDeleteClick} >
              <img style = {{width: 20}} src={Delete} alt="delete-button" />
            </DeleteBtn>
          </TodoItem>

    );
  };
  
  export default Todo;