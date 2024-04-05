import { useState } from 'react'
import { Route, Routes } from "react-router-dom";

import './App.css'
import Home from './Routing/Pages/home';
import Navbar from './Routing/Components/navbar';

import About from './Routing/Pages/about';
import Contact from './Routing/Pages/contact';
import Counter from './Routing/Components/counter'; // Corrected import name

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      {/* <Counter />  */}
      {/* <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes> */}
    </>
  )
}

export default App
