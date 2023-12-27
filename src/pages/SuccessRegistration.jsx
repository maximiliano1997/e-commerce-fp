import { Link } from 'react-router-dom'
// import React from 'react';


export function SuccessRegistration() {
    return (
        <>
            <div className='flex-column w-full h-full place-item-center'>
                <div className='w-full h-[100vh] text-center pt-[150px]'>
                    <p className='text-green-700 font-bold text-[50px] mb-[50px]'>Creacion de Cuenta Completada Exitosamente!</p>
                    <Link to='/userProfile' className='bg-green-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-lg text-[33px]'>Ir a mi Perfil</Link>
                </div>
            </div>
        </>
    )
}