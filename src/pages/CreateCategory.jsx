import React, { useRef, useState } from 'react'
import axios from 'axios'
const CreateCategory = () => {

    const nameRef = useRef(null);
    const colorRef = useRef(null);
    const characterPhotoRef = useRef(null);
    const hoverRef = useRef(null);
    const coverPhotoRef = useRef(null);
    const descriptionRef = useRef(null);


    const [category, setCategory] = useState({

        name: "",
        color: "",
        character_photo: "",
        hover: "",
        cover_photo: "",
        description: "",

    })

    function handleSubmit(e) {
        e.preventDefault()

        // const newCategory = {
        //     name: nameRef.current.value,
        //     color: colorRef.current.value,
        //     character_photo: characterPhotoRef.current.value,
        //     hover: hoverRef.current.value,
        //     cover_photo: coverPhotoRef.current.value,
        //     description: descriptionRef.current.value,
        // }

        // if(newCategory.name.length < 4){
        //     alert("El nombre de la categoria debe tener al menos 4 caracteres")
        //     return
        // }
        // if(!newCategory.color.startsWith("#")){
        //     alert("El color debe comenzar con #")
        //     return
        // }

        console.log(category)

        axios.post("http://localhost:8080/categories", category, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
            .then(res => {
                alert("Creada con exito")

            }).catch(err => console.log(err))

        setCategory({
            name: "",
            color: "",
            character_photo: "",
            hover: "",
            cover_photo: "",
            description: "",
        })
    }

    function handleInput(e) {

        setCategory({ ...category, [e.target.name]: e.target.value })

    }

    return (
        <div className='w-full flex flex-1 h-full flex-col justify-center items-center p-4'>
            <form className='flex gap-4 flex-col w-1/4' onSubmit={handleSubmit}>
                <fieldset className='border rounded flex-1 flex relative'>
                    <input style={!category.name.match(/^[A-Za-z0-9\s]*$/) ? { borderColor: "red" } : null} ref={nameRef} type="text" value={category.name} onInput={handleInput} name="name" className='flex-1 border-b border-gray-300 bg-transparent outline-none px-2 py-1 ' placeholder='Nombre de la categoria' />
                </fieldset>
                <fieldset className='border rounded flex-1 flex'>
                    <input style={category.color.trim() !== "" && !category.color.startsWith("#") ? { borderColor: "red" } : null} ref={colorRef} type="text" value={category.color} onInput={handleInput} name="color" className='flex-1 border-b border-gray-300 bg-transparent outline-none px-2 py-1 ' placeholder='Color de la categoria' />
                </fieldset>
                <fieldset className='border rounded flex-1 flex'>
                    <input style={category.hover.trim() !== "" && !category.hover.startsWith("#") ? { borderColor: "red" } : null} ref={hoverRef} type="text" value={category.hover} onInput={handleInput} name="hover" className='flex-1 border-b border-gray-300 bg-transparent outline-none px-2 py-1 ' placeholder='Color hover de la categoria' />
                </fieldset>
                <fieldset className='border rounded flex-1 flex'>
                    <input style={category.description.trim() !== "" && category.description.length < 4 ? { borderColor: "red" } : null} ref={descriptionRef} type="text" value={category.description} onInput={handleInput} name="description" className='flex-1 border-b border-gray-300 bg-transparent outline-none px-2 py-1 ' placeholder='Descripcion de la categoria' />
                </fieldset>
                <fieldset className='border rounded flex-1 flex'>
                    <input style={category.cover_photo.trim() !== "" && category.cover_photo.length < 4 ? { borderColor: "red" } : null} ref={coverPhotoRef} type="text" value={category.cover_photo} onInput={handleInput} name="cover_photo" className='flex-1 border-b border-gray-300 bg-transparent outline-none px-2 py-1 ' placeholder='Foto portada de la categoria' />
                </fieldset>
                <fieldset className='border rounded flex-1 flex'>
                    <input style={category.character_photo.trim() !== "" && category.character_photo.length < 4 ? { borderColor: "red" } : null} ref={characterPhotoRef} type="text" value={category.character_photo} onInput={handleInput} name="character_photo" className='flex-1 border-b border-gray-300 bg-transparent outline-none px-2 py-1 ' placeholder='Foto del personaje de la categoria' />
                </fieldset>
                <button className='bg-blue-500 text-white rounded px-4 py-2'>Crear</button>
            </form>
        </div>
    )

}

export default CreateCategory