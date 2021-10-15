import React from 'react';

//style
import { TodoContainer, TodoUl, InnerContainer } from './StyledComponents';

//components
import AddTodo from './AddTodo';
import Todo from './Todo';

//redux
import { useSelector } from 'react-redux';

const MyList = () => {
    const todos = useSelector((state) => state.todos);

    return (
        <div>
            <TodoContainer> 
                <AddTodo />
                <InnerContainer>
                    <TodoUl>
                    {todos ? (
                        todos.map((todo) => (
                            <Todo key={todo.id} id={todo.id} title={todo.title} completed={todo.completed} />
                        ))
                    ) : (
                        <div>Loading...</div>
                    )}
                    </TodoUl>
                </InnerContainer>
            </TodoContainer>
            
        </div>
    )
}

export default MyList;