import axios from "axios";
import {UserAction, usersActionsTypes} from "../../types/userTypes";
import {Dispatch} from "redux";

export function fetchUsers() {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({type: usersActionsTypes.FETCH_USERS})
            const response = await axios.get("https://jsonplaceholder.typicode.com/users")
            dispatch({type: usersActionsTypes.FETCH_USERS_SUCCESS, payload: response.data})
        } catch (e) {
            dispatch({
                type: usersActionsTypes.FETCH_USERS_ERROR,
                payload: "Произошла ошибка при загрузке пользователей"
            })
        }
    }
}