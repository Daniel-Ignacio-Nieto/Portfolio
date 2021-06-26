import React from "react";
import EP from "../Assets/Ecommerce-Portfolio.mp4";
import HM from "../Assets/HenryManager-Portfolio.mp4";
import WAPP from "../Assets/Weather-App.mp4";
import SOPA from "../Assets/Sopa-PWA.mp4";
import Fade from "react-reveal/Fade";
import "./portfolio.css";

const Portfolio = () => {
	return (
		<section id="Portfolio" className="Port-Container">
			<Fade className="Port-Fade">
				<div className="Port-Intro">
					<h1>Portfolio</h1>
					<p>Aquí te muestro algunos de los proyectos en los cuales trabajé</p>
				</div>
				<div className="Port-Proyect">
					<div className="Port-Proyect-video">
						<video controls autoPlay muted>
							<source src={EP} type="video/mp4" />
							Video del Proyecto
						</video>
					</div>
					<div className="Port-Proyect-Description">
						<div className="Port-P-D-Titles">
							<h2>Patagonia E-commerse</h2>
							<p>
								E-commerce de venta de cervezas Patagonia, en el cual trabajamos 6 personas en conjunto aplicando
								metodologías Agiles SCRUM.
							</p>
						</div>
						<div className="Port-P-D-Tecnologies">
							<ul>
								<li>Javascript</li>
								<li>React</li>
								<li>Redux</li>
								<li>Express</li>
								<li>NodeJS</li>
								<li>Sequelize</li>
								<li>PostgreSQL</li>
								<li>Passport</li>
								<li>Mailgun</li>
								<li>CSS Puro</li>
							</ul>
						</div>
						<div className="Port-P-D-btns">
							<a href="https://ecommerce-patagonia.vercel.app/" target="_blank" rel="noopener noreferrer">
								Sitio Web
							</a>
							<a
								href="https://github.com/Daniel-Ignacio-Nieto/ecommerce_patagonia"
								target="_blank"
								rel="noopener noreferrer">
								Repositorio
							</a>
						</div>
					</div>
				</div>
				<div className="Port-Proyect">
					<div className="Port-Proyect-video">
						<video controls autoPlay muted>
							<source src={HM} type="video/mp4" />
							Video del Proyecto
						</video>
					</div>
					<div className="Port-Proyect-Description">
						<div className="Port-P-D-Titles">
							<h2>Henry Manager</h2>
							<p>
								Una Plataforma Web, que facilita la administración y las estadísticas de desempeño estudiantil a lo
								largo del curso en Henry.
							</p>
						</div>
						<div class="Port-P-D-Tecnologies">
							<ul>
								<li>Typescript</li>
								<li>React</li>
								<li>Redux</li>
								<li>MongoDB</li>
								<li>Mongoose</li>
								<li>NodeJS</li>
								<li>Passport</li>
								<li>Mailgun</li>
								<li>CSS Puro</li>
							</ul>
						</div>
						<div className="Port-P-D-btns">
							<a
								href="https://github.com/Daniel-Ignacio-Nieto/Proyecto-Final-ft07-04"
								target="_blank"
								rel="noopener noreferrer">
								Repositorio
							</a>
						</div>
					</div>
				</div>
				<div className="Port-Proyect">
					<div className="Port-Proyect-video">
						<video controls autoPlay muted>
							<source src={WAPP} type="video/mp4" />
							Video del Proyecto
						</video>
					</div>
					<div className="Port-Proyect-Description">
						<div className="Port-P-D-Titles">
							<h2>Wheather App</h2>
							<p>
								Una página web para consultas y detalles sobre el clima en una región o ciudad específica consumiendo
								los datos de una API publica. Se puede apreciar tanto en vista de escritorio como en mobile.
							</p>
						</div>
						<div class="Port-P-D-Tecnologies">
							<ul>
								<li>JavaScript</li>
								<li>React</li>
								<li>Fetch</li>
								<li>Promesas</li>
								<li>CSS Puro</li>
							</ul>
						</div>
						<div className="Port-P-D-btns">
							<a href="https://the-weather-app-ivory.vercel.app/" target="_blank" rel="noopener noreferrer">
								Sitio Web
							</a>
							<a href="https://github.com/Daniel-Ignacio-Nieto/Weather-App" target="_blank" rel="noopener noreferrer">
								Repositorio
							</a>
						</div>
					</div>
				</div>
				<div className="Port-Proyect">
					<div className="Port-Proyect-video">
						<video controls autoPlay muted>
							<source src={SOPA} type="video/mp4" />
							Video del Proyecto
						</video>
					</div>
					<div className="Port-Proyect-Description">
						<div className="Port-P-D-Titles">
							<h2>SOPA PWA</h2>
							<p>
								Sistema de Organización Personal en Angular(SOPA), es una Aplicacion Web Progresiva(PWA) utilizada para
								generar una organización en las tareas personales de cada uno, con fecha, hora y un control sobre éstas
								si estan completadas o no.
							</p>
						</div>
						<div class="Port-P-D-Tecnologies">
							<ul>
								<li>Typescript</li>
								<li>Angular</li>
								<li>Angular-Http-Client</li>
								<li>RXJS</li>
								<li>PWA</li>
								<li>Angular Material</li>
								<li>SASS</li>
							</ul>
						</div>
						<div className="Port-P-D-btns">
							<a href="https://sopita-app.github.io/sopita" target="_blank" rel="noopener noreferrer">
								Sitio Web
							</a>
							<a href="https://github.com/Daniel-Ignacio-Nieto/sopita" target="_blank" rel="noopener noreferrer">
								Repositorio
							</a>
						</div>
					</div>
				</div>
			</Fade>
		</section>
	);
};

export default Portfolio;
