import React from 'react'
import { Route, Routes } from "react-router-dom";
import Homepage from '../pages/home';

const Routers = () => {
  return (
    <>
       <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </>
  )
}

export default Routers
