import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import axios from 'axios';
import Card from '../components/Card';
import { Link } from 'react-router-dom';

const Home = () => {

    const [categorias, setCategorias] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        axios("http://localhost:8080/categories") // call stack // event loop // queue 
            .then(res => {
                setCategorias(res.data.categories)
            })
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }, [])


    return (
        <main className='w-full flex-1 h-full flex-col justify-center items-center p-4'>
            <h1>Lista de categorias</h1>
            {loading && <h1>Cargando...</h1>}
            <div className='flex w-full gap-4'>
                {
                    categorias.length > 0
                        ? categorias.map(categoria => (
                            <Card.Category key={categoria._id} categoria={categoria}/>
                        ))
                        : !loading && <h1>No hay categorias</h1>
                }
            </div>
        </main>
    )
}

export default Home;