import {useDispatch} from "react-redux";
import {TypedDispatch} from "../store/reducers";

export const useTypedDispatch: () => TypedDispatch = useDispatch