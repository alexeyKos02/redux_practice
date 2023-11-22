import './App.css';
import {useDispatch, useSelector} from "react-redux"
import {incrementCreator, decrementCreator, asyncIncrementCreator, asyncDecrementCreator} from "./store/countReducer";
import {getUsers} from "./asynsFunctions/userFunctions";
import {asyncAddManyUsers} from "./store/userReducer";

function App() {
    const dispatch = useDispatch()
    const count = useSelector(state=> state.count.count)
    const users = useSelector(state=> state.users.users)

    function increment(){
        dispatch(incrementCreator())
    }
    function incrementAsync(){
        dispatch(asyncIncrementCreator())
    }
    function decrement(){
        dispatch(decrementCreator())
    }
    function decrementAsync(){
        dispatch(asyncDecrementCreator())
    }


    return (
    <div className="App">
        <div>{count}</div>
      <div>
        <button onClick={()=>increment()}>Увеличить число</button>
        <button onClick={()=>incrementAsync()}>Увеличить число ассинхроно</button>
        <button onClick={()=>decrement()}>Уменьшить число</button>
        <button onClick={()=>decrementAsync()}>Уменьшить число ассинхроно</button>
        <button onClick={()=>dispatch(getUsers())}>Получить всех пользователей</button>
        <button onClick={()=>dispatch(asyncAddManyUsers())}>Получить всех пользователей ассинхроно</button>
      </div>
        <>
            {users.map(user=>(
                <div key={user.id}>{user.name}</div>
            ))}
        </>
    </div>
  );
}

export default App;
