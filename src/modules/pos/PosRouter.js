import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PosControlScreens from './screens/control/PosControlScreens'
import "./../../sass/pos.scss";

function PosRouter() {
  return (
    <Routes>
      <Route path={'/control'} element={<PosControlScreens/>}/>
    </Routes>
  )
}

export default PosRouter