import logo from './logo.svg';
import './App.css';
import { PlayerCard } from 'native_react_sdk';

function App() {
  return (
	<div>
	<header>
	  <h2 className='h2'>Responsive web without JS</h2>
	</header>

	<nav>
	  <ul>
		<li className="menu active">
		  <a href="#" className="menus">Historias</a>
		</li>
		<li className="menu">
		  <a href="#" className="menus">Servicios</a>
		</li>
		<li className="menu">
		  <a href="#" className="menus">Lugares</a>
		</li>
		<li className="menu">
		  <a href="#" className="menus">Mapa</a>
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
		<h3 className='h3'>SECCIÓN DE INFORMACIÓN DESTACADA</h3>
         <PlayerCard/>
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
