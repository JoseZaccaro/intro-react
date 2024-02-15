import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Card from '../components/Card'

const CategoryDetail = () => {

  // const [category, setCategory] = useState({})
  // const [mangas, setMangas] = useState({})
  const navigate = useNavigate()
  const { _id } = useParams()
  const [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {
    axios.get(`http://localhost:8080/mangas`)
      .then(res => {
        // setTimeout(() => {
        //   navigate("/")
        // }, 3000)

      })
      .catch(err => console.log(err))


  }, [])

  // console.log(mangas);

  return (
    <div className='w-full flex gap-4 p-4'>
      
    </div>
  )
}

export default CategoryDetail;