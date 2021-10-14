import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export const getTodosAsync = createAsyncThunk(
	'todos/getTodosAsync',
	async () => {
		const resp = await fetch('https://jsonplaceholder.typicode.com/todos');
		if (resp.ok) {
			const todos = await resp.json();
            todos.length = 10;
			return { todos };
		}
	}
);

export const todoReducer = createSlice({
	name: 'todos',
	initialState: [],
	reducers: {
		addTodo: (state, action) => {
			const todo = {
				id: uuidv4(),
				title: action.payload.title,
				completed: false,
			};
			state.push(todo);
		},
		toggleComplete: (state, action) => {
			const index = state.findIndex((todo) => todo.id === action.payload.id);
			state[index].completed = action.payload.completed;
		},
		deleteTodo: (state, action) => {
			return state.filter((todo) => todo.id !== action.payload.id);
		},
		editTodo: (state, action) => {
			const index = state.findIndex((todo) => todo.id === action.payload.id);
			state[index].title = action.payload.title;
		}
	},
	extraReducers: {
		[getTodosAsync.fulfilled]: (state, action) => {
			return action.payload.todos;
		},
	},
});

export const { addTodo, toggleComplete, deleteTodo, editTodo } = todoReducer.actions;

export default todoReducer.reducer;