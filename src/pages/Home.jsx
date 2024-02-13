import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import axios from 'axios';
import Client from '../components/Client';

const Home = () => {


    useEffect(() => {
        axios("http://localhost:8080/") // call stack // event loop // queue 
            .then(res => {
                console.log(res.data)
            })
            .catch(err => console.log(err))
    }, [])


    return (
        <main className='main-home flex gap-4'>

        </main>

    )
}

export default Home;