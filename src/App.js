// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './components/signup/SignUp';
import Home from './components/home';
import Referrals from './components/referrals/Referrals';

const App = () => {
  return (
    <Router>
      <div>
        <nav style={{display: 'flex', columnGap: "20px"}}>
          <a style={{width: "100px", textAlign: 'center'}} className="login_btn" href="/">Home</a>
          <a style={{width: "100px" , textAlign: 'center'}} className="login_btn" href="/login">Login</a>
          <a style={{width: "100px" , textAlign: 'center'}} className="login_btn" href="/referrals">Referrals</a>
          
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<SignUp />} />
          <Route path='/referrals' element={<Referrals/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
