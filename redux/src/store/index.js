import {configureStore} from "@reduxjs/toolkit"
import userReducer from "./userReducer";
import countReducer from "./countReducer";
import createSagaMiddleware from "redux-saga"
import {rootWatcher} from "../saga";
const sagaMiddleware = createSagaMiddleware()
export const store = configureStore({reducer: {users: userReducer, count: countReducer},
    middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(sagaMiddleware)})
sagaMiddleware.run(rootWatcher)