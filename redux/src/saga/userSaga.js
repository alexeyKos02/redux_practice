import {call, put,takeEvery} from "redux-saga/effects"
import {addManyUsers, ASYNC_GET_USERS} from "../store/userReducer";
const get = () => fetch('https://jsonplaceholder.typicode.com/users')
function* getManyUsersWorker(){
    const data = yield call(get)
    const json = yield call(()=>new Promise(res=> res(data.json())))
    yield put(addManyUsers(json))
}
export function* usersWatcher(){
    yield takeEvery(ASYNC_GET_USERS, getManyUsersWorker)
}