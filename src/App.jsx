import React from 'react'
import Form from './Components/Form'
import Nav from './Components/Nav'
import { Route, Routes } from 'react-router-dom'   
import Feedback from './Components/Feedback'

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/student" element={<Form />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
      <div className="container">
        <h1 className='mt-5'>LocalBox Miner</h1>
        <h6>Session & Local Storage </h6>
      </div>
    </>
  )
}

export default App;
