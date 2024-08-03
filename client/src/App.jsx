import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className=" w-full bg-custom-gradient min-h-svh flex flex-col justify-center items-start">
      <Outlet/>
      <Footer/>
    </div>

    </>
     
  )
}

export default App
