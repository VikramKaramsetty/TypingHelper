import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import FirstStep from './Pages/FirstStep';

function App() {
  return (
    <Router>
        <Routes>
            <Route path="/"  />
            <Route path="/First-Step" element={<FirstStep />} />
        </Routes>
    </Router>
  )
}

export default App;