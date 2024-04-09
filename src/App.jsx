import { useState } from 'react'
import { Route, Routes } from "react-router-dom";

import './App.css'
import Home from './Routing/Pages/home';
import Navbar from './Routing/Components/navbar';

import About from './Routing/Pages/about';
import Contact from './Routing/Pages/contact';
import Counter from './Routing/Components/counter'; // Corrected import name
import DummyComponent from './Routing/Components/sasscom';
import MuiComponents from './Routing/Pages/muiComponents';
import ReactBoostrap from './Routing/Pages/react-boostrap';

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      {/* <Counter />  */}
      {/* <DummyComponent /> */}
      {/* <h1>Hii</h1> */}
       {/* <Navbar /> */}

      <Routes>
        <Route path='/mui' element={<MuiComponents />} />
        <Route path='/rb' element={<ReactBoostrap />} />
        {/* <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes> 
    </>
  )
}

export default App
