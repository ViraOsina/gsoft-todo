import React from 'react';
import { useEffect } from 'react';
import { TodoContainer, TodoUl, InnerContainer } from './StyledComponents';

import Todo from './Todo';
import { useSelector, useDispatch } from 'react-redux';
import { getTodosAsync } from '../redux/todoReducer';


function MyList () {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    useEffect(() => {
		dispatch(getTodosAsync());
	}, [dispatch]);

//axios to retrieve data from REST API to build mockup
/*   useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos",{
        params: {
          _limit: 10
         }
      }).then((result) => {
      setTodos(result.data);
    });
  }, []); */

    return (
        <div>
            <TodoContainer> 
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