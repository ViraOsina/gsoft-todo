import React from 'react';
import { TodoContainer, TodoItem, TodoUl, DeleteBtn } from './StyledComponents';
import AddTodo from './AddTodo';
import Delete from './trash.png';

const TodoList = ({ todos, onUpdateTodo }) => {
    return (
    <TodoContainer>
    <AddTodo/>
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
    </TodoContainer>
    );
  };
  
  export default TodoList;