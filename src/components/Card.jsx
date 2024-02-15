import React from 'react'
import { Link } from 'react-router-dom';

const Card = ({ categoria, manga, children }) => {

    return (
        <div className='flex flex-col items-center justify-between p-4 border w-[300px] rounded border-blue-400'>
            {children}
        </div>
    )

}

Card.Manga = ({ manga }) => {
    return (
        <div className='flex flex-col items-center justify-between p-4 border w-[300px] rounded' style={{ borderColor: manga.color }}>
            <img src={manga.cover_photo} alt="character" className="w-24 h-24" />
            <h2 className="text-xl max-w-[300px]">{manga.title}</h2>
            <p className="text-sm max-w-[300px]">{manga.description}</p>
            {/* <Link to={`/category/${manga._id}`} className="text-sm max-w-[300px] px-4 py-2 rounded " style={{ backgroundColor: manga.color }} >Ver más</Link> */}
        </div>
    )
}

Card.Category = ({ categoria }) => {

    return (
        <div className='flex flex-col items-center justify-between p-4 border w-[300px] rounded' style={{ borderColor: categoria.color }}>
            <img src={categoria.character_photo} alt="character" className="w-24 h-24" />
            <Card.Title className="text-xl max-w-[300px]">{categoria.name}</Card.Title>
            <p className="text-sm max-w-[300px]">{categoria.description}</p>
            <Link to={`/category/${categoria._id}`} className="text-sm max-w-[300px] px-4 py-2 rounded " style={{ backgroundColor: categoria.color }} >Ver más</Link>
        </div>
    )
}

Card.Title = ({ children }) => {
    return (
        <h2 className="text-xl max-w-[300px]">{children}</h2>
    )
}




// if (manga) {
// return (
//     <div className='flex flex-col items-center justify-between p-4 border w-[300px] rounded' style={{ borderColor: categoria.color }}>
//         <img src={categoria.cover_photo} alt="character" className="w-24 h-24" />
//         <h2 className="text-xl max-w-[300px]">{categoria.name}</h2>
//         <p className="text-sm max-w-[300px]">{categoria.description}</p>
//         {/* <Link to={`/category/${categoria._id}`} className="text-sm max-w-[300px] px-4 py-2 rounded " style={{ backgroundColor: categoria.color }} >Ver más</Link> */}
//     </div>
// )
// }

// console.log(categoria);

// return (
// <div className='flex flex-col items-center justify-between p-4 border w-[300px] rounded' style={{ borderColor: categoria.color }}>
//     <img src={categoria.character_photo} alt="character" className="w-24 h-24" />
//     <h2 className="text-xl max-w-[300px]">{categoria.name}</h2>
//     <p className="text-sm max-w-[300px]">{categoria.description}</p>
//     <Link to={`/category/${categoria._id}`} className="text-sm max-w-[300px] px-4 py-2 rounded " style={{ backgroundColor: categoria.color }} >Ver más</Link>
// </div>
// )

export default Card