const defaultState = {
    users:[]
}
const GET_USERS = "GET_USERS"
export const ASYNC_GET_USERS = "ASYNC_GET_USERS"
export default function userReducer(state = defaultState, action){
    switch (action.type){
        case GET_USERS:
            return {...state, users: [...state.users, ...action.payload]}
        default:
            return state
    }
}

export const addManyUsers = (payload) =>({type:GET_USERS, payload})
export const asyncAddManyUsers = () =>({type:ASYNC_GET_USERS})