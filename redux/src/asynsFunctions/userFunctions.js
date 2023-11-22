import {addManyUsers} from "../store/userReducer";

export function getUsers(){
    return function (dispatch){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => dispatch(addManyUsers(json)))
    }
}