import React, { useState } from 'react';
import '../../components/signUp.css'
import axios from 'axios';
const SignUp = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const email = 'serkan@joinnative.io';
	const TokenTemp='15d14c3a-6f74-4c6a-ba6d-7c335d195b63'
	// const email = 'jahir.rayhan@bedatasolutions.com';
	const handleClick=()=>{
		const fetchData = async () => {
			try {
			  const response = await axios.post(
				"https://dev.api.pitch.space/api/acknowledgement", 
				{},
				{
				  params: {
					email,
					token:TokenTemp,
					actionName:'Login'
				  },
				}
			  );
			  if (response.status === 200) {
				//setAcknowledgementData(response.data);
				console.log("hlw");
                setIsLoggedIn(true);
			  }
			} catch (err) {
			 
			}
		  };
		  fetchData();
	}


  return (
    <div className="card">
      {!isLoggedIn ? <>
      <h2>Login Form</h2>
      <form className="form">
        <input type="email" placeholder="Email Address" className="email" />
        <input type="password" placeholder="Password" className="pass" />
      </form>
      <button type="button" onClick={handleClick} className="login_btn">Login</button>
      </> : <div style={{backgroundColor: 'greenyellow', height: "500px", width: "500px",  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <h3>You are Logged in</h3>
            <button style={{width: "200px",cursor:'pointer'}} type="button" onClick={() => setIsLoggedIn(false)} className="login_btn">Back to login page</button>
        </div>}
     
    </div>
  );
}

export default SignUp;
