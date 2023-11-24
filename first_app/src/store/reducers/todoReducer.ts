import {TodosAction, todosActionTypes, TodosState} from "../../types/todoTypes";


const initialState: TodosState = {
    todos: [],
    loading: false,
    error: null,
    page: 1,
    limit: 10
}

export const todoReducer = (state = initialState, action: TodosAction): TodosState => {
    switch (action.type) {
        case todosActionTypes.FETCH_TODOS:
            return {...state, loading: true}
        case todosActionTypes.FETCH_TODOS_SUCCESS:
            return {...state, loading: false, todos: action.payload}
        case todosActionTypes.FETCH_TODOS_ERROR:
            return {...state, loading: false, error: action.payload}
        case todosActionTypes.SET_TODOS_PAGE:
            return {...state, page: action.payload}
        default:
            return state
    }
}

