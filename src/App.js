// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './components/signup/SignUp';
import Home from './components/home';

const App = () => {
  return (
    <Router>
      <div>
        <nav style={{display: 'flex', columnGap: "20px"}}>
          <a style={{width: "100px", textAlign: 'center'}} className="login_btn" href="/">Home</a>
          <a style={{width: "100px" , textAlign: 'center'}} className="login_btn" href="/login">Login</a>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
