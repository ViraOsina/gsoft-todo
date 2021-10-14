import React from 'react';
import { TodoContainer, TodoItem, TodoUl, DeleteBtn, InnerContainer } from './StyledComponents';
import Delete from './trash.png';

const TodoList = ({ todos, onUpdateTodo }) => {
    return (
    <TodoContainer>
    <InnerContainer>
      <TodoUl>
        {todos.map((todo) => (
          <TodoItem         
            key={todo.id}
            class="list-group-item d-flex justify-content-between align-items-center"
          >
            <input
              style={{ marginRight: '10px' }}
              type="checkbox"
              checked={todo.completed}
              onChange={() => onUpdateTodo(todo)}
            />

            {todo.title}

            
            <DeleteBtn><img style = {{width: 20}} src={Delete} alt="delete-button" /></DeleteBtn>
          </TodoItem>

        ))}
      </TodoUl>
    </InnerContainer>
    </TodoContainer>
    );
  };
  
  export default TodoList;