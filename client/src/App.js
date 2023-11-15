import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './Home';
import Start from './Start';
import Info from './Info';
import Behavior from './Behavior';
import BehaviorDirect from './BehaviorDirect';
import Result from './result';

function App() {
  const [isSwitched, setIsSwitced] = useState(true);
  const switchHandler = () => {
    setIsSwitced(!isSwitched);
  };
  return (
    <div className="App">
      <Router>

        <div className='titleBox' style={{ display: isSwitched ? "" : "none" }}>
          <Link to="/Start" onClick={switchHandler}> <img className="titleImg" alt="dog" src="img/puppy.png" /></Link>

        </div>

        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Start" element={<Start />} />
          <Route path="/Info" element={<Info />} />
          <Route path="/Behavior" element={<Behavior />} />
          <Route path="/BehaviorDirect" element={<BehaviorDirect />} />
          <Route path="/Result" element={<Result />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
