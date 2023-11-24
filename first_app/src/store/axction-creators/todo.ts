import axios from "axios";
import {Dispatch} from "redux";
import {TodosAction, todosActionTypes} from "../../types/todoTypes";

export function fetchTodos(page = 1, limit = 10) {
    return async (dispatch: Dispatch<TodosAction>) => {
        try {
            dispatch({type: todosActionTypes.FETCH_TODOS})
            const response = await axios.get("https://jsonplaceholder.typicode.com/todos",
                {params: {_limit: limit, _page: page}})
            dispatch({type: todosActionTypes.FETCH_TODOS_SUCCESS, payload: response.data})
        } catch (e) {
            dispatch({type: todosActionTypes.FETCH_TODOS_ERROR, payload: "Произошла ошибка при закгрузке списка дел"})
        }
    }
}

export function setTodoPage(page: number) {
    return ({type: todosActionTypes.SET_TODOS_PAGE, payload: page})
}