import React, {useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {fetchUsers} from "../store/axction-creators/user";
import {useTypedDispatch} from "../hooks/useTypedDispatch";

const UserList: React.FC = () => {
    const {users, error, loading} = useTypedSelector(state => state.user)
    const dispatch = useTypedDispatch()
    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    if (loading) {
        return (
            <div>
                Загрузка
            </div>
        );
    }
    if (error) {
        return (
            <div>
                {error}
            </div>
        )
    }
    return (
        <>
            {users.map(user => (
                <div>{user.name}</div>
            ))}
        </>
    );
};

export default UserList;