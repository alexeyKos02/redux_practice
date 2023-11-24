interface Todo {
    "userId": number,
    "id": number,
    "title": string | null,
    "completed": boolean
}

export interface TodosState {
    todos: Todo[],
    loading: boolean,
    error: null | string,
    page: number,
    limit: number
}

export enum todosActionTypes {
    FETCH_TODOS = "FETCH_TODOS",
    FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS",
    FETCH_TODOS_ERROR = "FETCH_TODOS_ERROR",
    SET_TODOS_PAGE = "SET_TODOS_PAGE"
}

export interface FetchTodosAction {
    type: todosActionTypes.FETCH_TODOS
}

export interface FetchTodosSuccessAction {
    type: todosActionTypes.FETCH_TODOS_SUCCESS,
    payload: Todo[]
}

export interface FetchTodosErrorAction {
    type: todosActionTypes.FETCH_TODOS_ERROR,
    payload: string
}

export interface SetTodoPage {
    type: todosActionTypes.SET_TODOS_PAGE,
    payload: number
}

export type TodosAction =
    FetchTodosAction
    | FetchTodosSuccessAction
    | FetchTodosErrorAction
    | SetTodoPage
