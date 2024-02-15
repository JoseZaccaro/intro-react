import { useState } from 'react'
import Home from './pages/Home';
import MainLayout from './layouts/MainLayout';
import About from './pages/About';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error404 from './pages/Error404';
import CategoryDetail from './pages/CategoryDetail';
import CreateCategory from './pages/CreateCategory';
import AdminLayout from './layouts/AdminLayout';


const App = () => {

  return (
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/category/:_id' element={<CategoryDetail />} />
          <Route path='*' element={<Error404 />} />
        </Route>
      </Routes>

    </BrowserRouter>

  )
}

export default App
