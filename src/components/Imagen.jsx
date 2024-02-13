import React, { useEffect, useState } from 'react'

const Imagen = (props) => {
    const [count, setCount] = useState(0)
    const [algo, setAlgo] = useState("algo")
    // function settearImagen(url) {
    //     console.log("url: " + url)
    //     setSrc(url)
    //     console.log("SRC: " + src)
    // }
    // onClick={() => settearImagen(props.url)}>

    // useEffect(()=>{
    // })
    function handleCount() {
        setCount(count + 1)
    }
    useEffect(() => {
        console.log("Mount: componente " + props.name);
        return () => {
            console.log("dismount: componente " + props.name);
        }
    }, [])

    useEffect(() => {
        console.log("count comp: " + props.name, count)
    }, [count])

    return (
        <div className={props.className} onClick={handleCount}>
            <img src={props.src} />
        </div>
    )
}

export default Imagen