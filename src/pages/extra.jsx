import { UserContext } from '../App';
import { useContext } from 'react';


export function Extra() {
    const { user } = useContext(UserContext);
    return (
        <>
            <h2>Bienvenido! {user.email}</h2>
        </>
    )
}