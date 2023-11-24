import React, {useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useTypedDispatch} from "../hooks/useTypedDispatch";
import {fetchTodos, setTodoPage} from "../store/axction-creators/todo";

const TodosList = () => {
    const {todos, loading, error, limit, page} = useTypedSelector(state => state.todos)
    const dispatch = useTypedDispatch()
    const pages = [1, 2, 3, 4, 5]
    useEffect(() => {
        dispatch(fetchTodos(page, limit))
    }, [page])
    if (loading) {
        return <div>Загрузка</div>
    }
    if (error) {
        return <div>{error}</div>
    }
    return (
        <div>
            {todos.map(todo => (
                <div key={todo.id}>{todo.id} - {todo.title}</div>
            ))}
            <div style={{display: "flex"}}>
                {pages.map(number => (
                    <div key={number}
                         style={{
                             border: number === page ? "2px solid green" : "1px solid gray",
                             padding: 10
                         }}
                         onClick={() => dispatch(setTodoPage(number))}
                    >{number}</div>
                ))}
            </div>
        </div>
    );
};

export default TodosList;