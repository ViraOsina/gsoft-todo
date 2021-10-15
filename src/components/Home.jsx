import React, {useEffect} from 'react';
import { getTodosAsync } from '../redux/todoReducer';
import { useDispatch } from 'react-redux';

const Home = props => {
    const dispatch = useDispatch();

    useEffect(() => {
		dispatch(getTodosAsync());
	}, []);

    return (
        <h1>Welcome to the <p className="orange">todo</p> app!</h1>
    )
}

export default Home;