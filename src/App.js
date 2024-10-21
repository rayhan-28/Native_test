
import { useState } from 'react';
import './App.css';
import { PlayerCard, PlayZone } from 'native_react_sdk';

function App() {
	const [showSuccess, setShowSuccess] = useState(false);

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
         <PlayerCard/>
       
		 
		{showSuccess && <PlayZone handleCloseSuccess={()=>setShowSuccess(false)}/>}
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
