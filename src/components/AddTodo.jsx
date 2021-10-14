import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todoReducer';
import { NewInput, InputContainer, AddTodoBtn } from './StyledComponents';
import { Redirect } from 'react-router';

const AddTodo = () => {
    const [value, setValue] = useState('');
	const dispatch = useDispatch();

	const onSubmit = (event) => {
		event.preventDefault();
		if (value) {
			dispatch(
				addTodo({
					title: value,
				})
			);
            
		}
        setValue('');
	};

    return(
        <InputContainer onSubmit={onSubmit}>
            <NewInput 
                type="text" 
                placeholder="Add new task here"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            >

            </NewInput>
            <AddTodoBtn onClick={onSubmit}>Add</AddTodoBtn>
        </InputContainer>
    )
}

export default AddTodo;