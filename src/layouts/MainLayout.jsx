import React from 'react'
import Header from './../components/Header';
import { Outlet } from 'react-router-dom';

const MainLayout = (props) => {
    return (
        <div className='main-layout'>
            <Header />
            <Outlet />
            <footer></footer>
        </div>
    )
}

export default MainLayout