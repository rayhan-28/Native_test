import axios from 'axios';
import React, { useState } from 'react'

const Referrals = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [linkAddress,setLinkAddress]=useState("")
	const [email,setEmail]=useState("");
	const TokenTemp='4733788f-783d-455f-a2b7-3b1815e53196'
    const [showMessage,setShowMessage]=useState(null)
	// const email = 'jahir.rayhan@bedatasolutions.com';
	
	const handleClick=()=>{
		const fetchData = async () => {
			try {
				console.log("email ",email);
			  const response = await axios.post(
				"https://dev.api.pitch.space/api/acknowledgement", 
				{},
				{
				  params: {
					email,
					token:TokenTemp,
					link:linkAddress
				  },
				}
			  );
			  if (response.status === 200) {
				//setAcknowledgementData(response.data);
				console.log("hlw");
                setIsLoggedIn(true);
                setShowMessage(response.data.message)
                console.log(response);
			  }
			} catch (err) {
			 
			}
		  };
		  fetchData();
	}
  
  return (
    <div className="card">
      {!isLoggedIn ? <>
      <h2>Referrals Form</h2>
      <form className="form">
        <input type="email" placeholder="Email Address" onChange={(e)=>setEmail(e.target.value)} className="email" />
        <input type="password" placeholder="Password" className="pass" />
        <input type="text" placeholder="Put your link" className="email" onChange={(e)=>setLinkAddress(e.target.value)}/>
      </form>
      <button type="button" onClick={handleClick} className="login_btn">Submit</button>
      </> : <div style={{backgroundColor: 'greenyellow', height: "500px", width: "500px",  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <h3>{showMessage}</h3>
            <button style={{width: "200px",cursor:'pointer'}} type="button" onClick={() => setIsLoggedIn(false)} className="login_btn">Back to Referrals page</button>
        </div>}
     
    </div>
  )
}

export default Referrals