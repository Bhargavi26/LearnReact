import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ControlledComponent from './components/ControlledComponent';
import UnControlledComponent from './components/UnControlledComponent';
import Home from './components/Home'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/controlled" element={<ControlledComponent />} />
        <Route path="/uncontrolled" element={<UnControlledComponent />} />
        <Route path="/useEffect" element={<UnControlledComponent />} />
        <Route path="/useMemo" element={<UnControlledComponent />} />
        <Route path="/useCallBack" element={<UnControlledComponent />} />
        <Route path="/useRef" element={<UnControlledComponent />} />

      </Routes>
    </Router>
  );
}

export default App;
