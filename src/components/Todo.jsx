import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleComplete, deleteTodo, editTodo } from '../redux/todoReducer';

//style
import { TodoItem, DeleteBtn, EditBtn, EditInput } from './StyledComponents';
import Delete from '../assets/trash.png';
import Edit from '../assets/pencil.png'

const Todo = ({ title, id, completed }) => {
    const dispatch = useDispatch();
    const [edit, setEdit] = useState(false)
    const [newTitle, setNewTitle] = useState(title)

	const handleCheckboxClick = () => {
		dispatch(toggleComplete({ id, completed: !completed }));
	};

	const handleDeleteClick = () => {
		dispatch(deleteTodo({ id }));
	};

  const handleEdit = () => {
    dispatch(editTodo({ id, title: newTitle }))
    if(edit) {
      setNewTitle(newTitle);   
    }
      setEdit(!edit);
  }

  const handleKeyPress = (e) => {
    if(e.key === "Enter") {
        handleEdit()
    }
  }

    return (

          <TodoItem>
            <input
              style={{ marginRight: '10px' }}
              type="checkbox"
              checked={completed}
              onChange={handleCheckboxClick}
              
            />

            {edit ?
              <EditInput type="text"
                value={newTitle}
                onKeyDown={handleKeyPress}
                onChange={(e) => {
                    setNewTitle(e.target.value);
                }}
              />
              :
              <span>{title}</span>}
            
            <EditBtn
            onClick={handleEdit}>
              <img style = {{width: 20}} src={Edit} alt="edit-button" />
            </EditBtn>
            <DeleteBtn 
            onClick={handleDeleteClick} >
              <img style = {{width: 20}} src={Delete} alt="delete-button" />
            </DeleteBtn>
          </TodoItem>

    );
  };
  
  export default Todo;