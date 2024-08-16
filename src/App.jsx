import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header, Footer, Hero, ImageCarousel, Projects, Contact, About } from "./index.js"

function App() {


  return (
    <div className='overflow-x-hidden mt-0' >
      <Header />
      <Hero />
      <ImageCarousel />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
