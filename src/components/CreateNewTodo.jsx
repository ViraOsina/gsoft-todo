import React, { useState } from 'react';

//style
import { NewInput, InputContainer, AddTodoBtn, TodoContainer } from './StyledComponents';

//redux
import { useDispatch } from 'react-redux';
import { addNewTodo } from '../redux/todoReducer';


const CreateNewTodo = () => {
    const [value, setValue] = useState('');
	const dispatch = useDispatch();

	const onSubmit = (e) => {
		e.preventDefault();
        
		if (value) {
			dispatch(
				addNewTodo({
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

    return (
        <TodoContainer>
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
            <h1 style ={{margin: '20px auto'}}>Add new task</h1>
        </TodoContainer>
    )
}

export default CreateNewTodo;