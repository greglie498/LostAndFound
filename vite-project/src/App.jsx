import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import './App.css'
import Navigation from './components/Navbar'
import Banner from './components/Banner'
import Footer from './components/Footer'

function App() {


  return (
    <>
    <div className='appLayout'>
    <Navigation />

    <main className='pageContent'>
      <Routes>
    <Route path="/" element={<Banner />} />
    </Routes>
    </main>
    <Footer />
    </div>
    </>
    
  )
}

export default App
