import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todoReducer';
import { NewInput, InputContainer, AddTodoBtn } from './StyledComponents';

const AddTodo = () => {
    const [value, setValue] = useState('');
	const dispatch = useDispatch();

	const onSubmit = (e) => {
		e.preventDefault();
        
		if (value) {
			dispatch(
				addTodo({
					title: value,
				})
			);
            
		}
        setValue('');
	};

    const handleKeyDown = (e) => {
        if(e.key === "Enter") {
            onSubmit(e)
        }
    }

    return(
        <InputContainer onSubmit={onSubmit}>
            <NewInput 
                type="text" 
                placeholder="Add new task here"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={handleKeyDown}
            >

            </NewInput>
            <AddTodoBtn onClick={onSubmit}>Add</AddTodoBtn>
        </InputContainer>
    )
}

export default AddTodo;