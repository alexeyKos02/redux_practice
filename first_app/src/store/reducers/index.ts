import {configureStore} from "@reduxjs/toolkit";
import {userReducer} from "./userReducer";
import {todoReducer} from "./todoReducer";

export const store = configureStore({reducer: {user: userReducer, todos: todoReducer}})
export type RootState = ReturnType<typeof store.getState>
export type TypedDispatch = typeof store.dispatch