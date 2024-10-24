
import { useState } from 'react';
import './App.css';
import { PlayerCard, PlayZone } from 'native_react_sdk';
import axios from 'axios';

function App() {
	const [showSuccess, setShowSuccess] = useState(false);
	const [acknowledgementData, setAcknowledgementData] = useState(null);
	const [error, setError] = useState(null);
    const email = 'jahir.rayhan@bedatasolutions.com';
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
				setAcknowledgementData(response.data);
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
	<header>
	  <h2 className='h2'>Responsive web without JS</h2>
	</header>

	<nav>
	  <ul>
		<li className="menu active">
		  <button className="menus">Historias</button>
		</li>
		<li className="menu">
		  <button className="menus">Servicios</button>
		</li>
		<li className="menu">
		  <button className="menus">Lugares</button>
		</li>
		<li className="menu">
		  <button className="menus">Mapa</button>
		</li>
	  </ul>
	</nav>

	<main>
	  <article>
		<h4 className='h4'>ARTÍCULOS SOBRE NOVEDADES</h4>

		<h5 className='h5'>Título del artículo 1</h5>
		{/* Self-closing img tag */}
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
	   onClick={()=>setShowSuccess(true)}
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

		{/* Name="Rayhan" 
		PhotoUrl="https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg" */}


         <PlayerCard  email={email} Name="Habib" PhotoUrl="https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg"/>
       
		 <button 
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
	   >Submit</button>
		{showSuccess && <PlayZone email={email} handleCloseSuccess={()=>setShowSuccess(false)}/>}
		<h5>Título del artículo 1</h5>
		{/* Self-closing img tag */}
		<img className='img' src="https://picsum.photos/200/300" alt="featured article" />
		<p className='p'>
		  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum sequi nisi aliquam, ipsum tempore
		  illo recusandae. Odit consectetur totam hic eius, commodi molestiae voluptates porro vel laboriosam,
		  tempore, nostrum quis.
		</p>

		<h5 className='h5'>Título del artículo 2</h5>
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

export default App;
