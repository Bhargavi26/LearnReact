import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ControlledComponent from './components/ControlledComponent';
import UnControlledComponent from './components/UnControlledComponent';
import UseRef from './components/Ref/UseRef';
import Home from './components/Home'
import CreateRef from './components/Ref/CreateRef';
import UseRefVsCreateRef from './components/Ref/UseRefVsCreateRef';
import ToDoList from './components/HOC/ToDoList';
import FirstComponent from './components/CustomHooks/FirstComponent';
import SecondComponent from './components/CustomHooks/SecondComponent';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         {/* <Route path="/controlled" element={<ControlledComponent />} />
//         <Route path="/uncontrolled" element={<UnControlledComponent />} />
//         <Route path="/useEffect" element={<UnControlledComponent />} />
//         <Route path="/useMemo" element={<UnControlledComponent />} />
//         <Route path="/useCallBack" element={<UnControlledComponent />} />
//         <Route path="/useRef" element={<UseRef />} />
//         <Route path="/createRef" element={<CreateRef />} />
//         <Route path="/useRefVsCreateRef" element={<UseRefVsCreateRef />} /> */}
//       </Routes>
//     </Router>
//   );
// }

function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <Home/>
      <ToDoList />
      <FirstComponent />
      <SecondComponent />

    </div>
  );
}

export default App;
