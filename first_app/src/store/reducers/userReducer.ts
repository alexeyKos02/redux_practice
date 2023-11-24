import {UserAction, usersActionsTypes, UserState} from "../../types/userTypes";

const defaultState: UserState = {
    users: [],
    loading: false,
    error: null
}

export function userReducer(state = defaultState, action: UserAction): UserState {
    switch (action.type) {
        case usersActionsTypes.FETCH_USERS:
            return {loading: true, error: null, users: []}
        case usersActionsTypes.FETCH_USERS_SUCCESS:
            return {loading: false, error: null, users: action.payload}
        case usersActionsTypes.FETCH_USERS_ERROR:
            return {loading: false, error: action.payload, users: []}
        default:
            return state
    }
}