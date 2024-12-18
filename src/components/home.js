
import { useState } from 'react';
import '../App.css';
import { PlayerCard,PlayZone } from 'native_react_sdk';
import axios from 'axios';

function Home() {
 const [showSuccess, setShowSuccess] = useState(false);
  const [erroShowSuccess,setErrorShowSuccess]=useState(false);
  const handleshow=()=>{
    setShowSuccess(true);
    setErrorShowSuccess(true);
   }

   const [isExpanded, setIsExpanded] = useState(false);
   const toggleView = () => {
    setIsExpanded(!isExpanded);
   };

	// const [acknowledgementData, setAcknowledgementData] = useState(null);
	const [error, setError] = useState(null);
    const email = 'serkan@joinnative.io';
	const TokenTemp='4733788f-783d-455f-a2b7-3b1815e53196'
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
			  }
			} catch (err) {
			  setError("You are not valid");
			}
		  };
		  fetchData();
	}
  return (
	<div>
	<main>
	  <article>
		<h4 className='h4'>ARTÍCULOS SOBRE NOVEDADES</h4>

		<h5 className='h5'>Título del artículo 1</h5>
		  
		<img className='img' src="https://www.lorempixel.com/400/200" alt="article" />
		<p className='p'>
		  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum sequi nisi aliquam, ipsum tempore
		  illo recusandae. Odit consectetur totam hic eius, commodi molestiae voluptates porro vel laboriosam,
		  tempore, nostrum quis.
		</p>
       
		<h5 className='h5'>Título del artículo 2</h5>
		
		{/* Self-closing img tag */}
		<img className='img' src="https://picsum.photos/200/300" alt="article" />
		<p className='p'>
		  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum sequi nisi aliquam, ipsum tempore
		  illo recusandae. Odit consectetur totam hic eius, commodi molestiae voluptates porro vel laboriosam,
		  tempore, nostrum quis.
		</p>
	  </article>
	  <section>
       <button 
	   onClick={handleshow}
	    style={{
			padding:'8px 20px',
			borderRadius:'15px 15px',
			border:'none',
			backgroundColor:'teal',
			color:'white',
			cursor:'pointer',
			marginBottom:'20px'
		}}
	   >PlayZone</button>

		<h3 className='h3'>SECCIÓN DE INFORMACIÓN DESTACADA</h3>
		<div style={{height:'25px'}}></div>

       
		{/* Self-closing img tag */}





		{/* Name="Rayhan" 
		PhotoUrl="https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg" */}

       
       
       
		 {/* <button 
	   onClick={handleClick}
	    style={{
			padding:'8px 20px',
			borderRadius:'15px 15px',
			border:'none',
			backgroundColor:'tomato',
			color:'white',
			cursor:'pointer',
			marginBottom:'20px'
		}}
	   >Submit</button> */}
		 {showSuccess &&
      <PlayZone email={email} 
      erroShowSuccess={erroShowSuccess} 
      setErrorShowSuccess={setErrorShowSuccess}
      handleErrorClose={()=>setErrorShowSuccess(false)}
      handleCloseSuccess={()=>setShowSuccess(false)}
	  photoUrl="https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg"
      />}
		<h5>Título del artículo 1</h5>
		{/* Self-closing img tag */}
		<img className='img' src="https://picsum.photos/200/300" alt="featured article" />
		<p className='p'>
		  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum sequi nisi aliquam, ipsum tempore
		  illo recusandae. Odit consectetur totam hic eius, commodi molestiae voluptates porro vel laboriosam,
		  tempore, nostrum quis.
		</p>

		<h5 className='h5'>Título del artículo 2</h5>
		<PlayerCard  email={email} Name="Serkan" PhotoUrl="https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg"/>
		{/* Self-closing img tag */}
		<img className='img' src="https://picsum.photos/200/300" alt="featured article" />
		<p className='p'>
		  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum sequi nisi aliquam, ipsum tempore
		  illo recusandae. Odit consectetur totam hic eius, commodi molestiae voluptates porro vel laboriosam,
		  tempore, nostrum quis.
		</p>
	  </section>
	</main>

	<footer>
	  <p className='p'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 2017 - without copyright</p>
	</footer>
  </div>
  );
}

export default Home;
