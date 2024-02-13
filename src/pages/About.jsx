import React, { useState } from 'react'
import Imagen from './../components/Imagen';

const About = () => {
    const [encendido, setEncendido] = useState(false)
    function toggleEncendido() {
        setEncendido(!encendido)
    }
    console.log(encendido)
    return (
        <main className='flex items-center justify-center w-full min-h-screen flex-col'>

            <button className='bg-slate-400 py-2 px-4 border rounded' onClick={toggleEncendido} >{encendido ? "Apagar" : "Encender"}</button>

            {
                encendido ?
                    <Imagen src="https://cdn-icons-png.flaticon.com/512/702/702797.png" className="w-10 h-10 encendida" name="1" />
                    : <Imagen src="https://cdn-icons-png.flaticon.com/512/702/702814.png" className="w-10 h-10 apagada" name="2" />
            }
            
        </main>
    )
}

export default About