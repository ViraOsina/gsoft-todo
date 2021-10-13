import React from 'react';
import { NewInput, InputContainer, AddTodoBtn } from './StyledComponents';

const AddTodo = props => {
    return(
        <InputContainer>
            <NewInput type="text" placeholder="Add new task here"></NewInput>
            <AddTodoBtn>Add</AddTodoBtn>
        </InputContainer>
    )
}

export default AddTodo;