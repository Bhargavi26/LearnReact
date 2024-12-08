import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ControlledComponent from './components/ControlledComponent';
import UnControlledComponent from './components/UnControlledComponent';
import UseRef from './components/Ref/UseRef';
import Home from './components/Home'
import CreateRef from './components/Ref/CreateRef';
import UseRefVsCreateRef from './components/Ref/UseRefVsCreateRef';
import ToDoList from './components/HOC/ToDoList';
import FirstComponent from './components/CustomHooks/FirstComponent';
import SecondComponent from './components/CustomHooks/SecondComponent';
import LifeCycle from './components/LifeCycle';
import UseEffectHook from './components/Hooks/UseEffect';
import ParentComponent from './components/CallBack/ParentComponent';
import ExNoCallback from './components/useCallback/ExNoCallback';
import ExYesCallback from './components/useCallback/ExYesCallback';
import ExNoMemo from './components/useMemoHook/ExNoMemo';
import ExYesMemo from './components/useMemoHook/ExYesMemo';
import Callback from './components/useCallback/Callback';
import Memo from './components/useMemoHook/Memo';


function App() {


  return (
    // <div style={{ textAlign: 'center' }}>
    //   <Home/>
    //   <ToDoList />
    //   <FirstComponent />
    //   <SecondComponent />

    //   <LifeCycle/>

    //   <UseEffectHook/>

    //   <ParentComponent/>
    //   <ExNoCallback/>
    //   <ExYesCallback/>

    //   <ExNoMemo/>

    //   <ExYesMemo/>

    // </div>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/controlled" element={<ControlledComponent />} />
        <Route path="/uncontrolled" element={<UnControlledComponent />} />
        <Route path="/effect" element={<UnControlledComponent />} />
        <Route path="/ref" element={<UseRef />} />
        <Route path="/callback" element={<Callback />} />
        <Route path="/memo" element={<Memo />} />
        <Route path="/lifecycle" element={<LifeCycle />} />
        
      </Routes>
    </Router >
  );
}

export default App;
