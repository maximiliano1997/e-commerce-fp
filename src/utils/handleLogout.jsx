import { useNavigate, useLocation, Link } from 'react-router-dom'
import { useState } from 'react';
// export function Logout() {

//     localStorage.removeItem("user");
//     const [refreshKey, setRefreshKey] = useState(0);
//     // const navigate = useNavigate()

// const redirectTo = '/home';
// console.log('Cerrando Sesion....')

// navigate(redirectTo, { replace: true });

// const handleRefresh = () => {
//     setRefreshKey(prevKey => prevKey + 1);
// };

//     // const redirectTo = '/';
//     // console.log('Cerrando Sesion....')

//     // navigate(redirectTo, { replace: true });
//     handleRefresh()

// }


export function Logout() {
    const [refreshKey, setRefreshKey] = useState(0);

    const handleRefresh = () => {
        setRefreshKey(prevKey => prevKey + 1);
    };
    const navigate = useNavigate()

    const handleLogout = () => {
        // Eliminar el usuario del localStorage
        localStorage.removeItem('user');
        // localStorage.setItem('')

        // Redireccionar a la página de inicio o a donde desees
        // window.location.href = '/';

        // O puedes usar useHistory si estás usando react-router-dom
        // import { useHistory } from 'react-router-dom';
        // const history = useHistory();
        // history.push('/');
        const redirectTo = '/';
        console.log('Cerrando Sesion....')
        handleRefresh()
        navigate(redirectTo, { replace: true });
    };



    return (
        <a
            className="inline-flex items-center justify-center px-5 py-1 text-base font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            onClick={handleLogout} href='/'>Logout</a>
    );
}
