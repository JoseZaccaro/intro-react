import React from 'react'
import Header from './../components/Header';

const MainLayout = (props) => {
    return (
        <div className='main-layout'>
            <Header/>
            {props.children}
            <footer></footer>
        </div>
    )
}

export default MainLayout