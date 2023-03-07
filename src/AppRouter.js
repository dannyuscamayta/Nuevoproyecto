import React from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import PosRouter from './modules/pos/PosRouter';

function AppRouter() {
  return (
    <Router>
        <Routes>
            <Route path={'/pos/*'} element={<PosRouter/>}/>
        </Routes>
    </Router>
  )
}

export default AppRouter