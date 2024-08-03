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
      <div className='h-5/6 w-full flex justify-center items-center'>
         <Outlet/>
      </div>
     <div className='h-1/6 w-full flex flex-col justify-end items-end'>
     <Footer/>
     </div>
      
    </div>

    </>
     
  )
}

export default App
