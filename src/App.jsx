import { useState } from 'react'
import Home from './pages/Home';
import MainLayout from './layouts/MainLayout';
import About from './pages/About';

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <MainLayout>
      <Home/>
      {/* <About /> */}
    </MainLayout>
  )
}

export default App
