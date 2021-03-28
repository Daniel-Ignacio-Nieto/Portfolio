import React from "react";
import EP from "../Assets/Ecommerce-Portfolio.mp4";
import HM from "../Assets/Imagenes/HenryAppPortada.jpg";
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
                        <video controls>
                            <source src={EP} type="video/mp4" />
                            Video del Proyecto
                        </video>
                    </div>
                    <div className="Port-Proyect-Description">
                        <div className="Port-P-D-Titles">
                            <h2>Patagonia Ecommerse</h2>
                            <p>E-commerce de venta de cervezas Patagonia, en el cual trabajamos 6 personas en conjunto aplicando metodoligas Agiles SCRUM</p>
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
                            <a href="https://ecommerce-patagonia.vercel.app/" target="_blank" rel="noopener noreferrer">Sitio Web</a>
                            <a href="https://github.com/Daniel-Ignacio-Nieto/ecommerce_patagonia" target="_blank"
                                rel="noopener noreferrer">Repositorio</a>
                        </div>
                    </div>
                </div>
                <div className="Port-Proyect">
                    <div className="Port-Proyect-video">
                        <video controls>
                            <source src={EP} type="video/mp4" />
                            Video del Proyecto
                        </video>
                    </div>
                    <div className="Port-Proyect-Description">
                        <div className="Port-P-D-Titles">
                            <h2>Henry Manager</h2>
                            <p>Una Plataforma Web, que facilita la administracion y las estadisticas de desempeño de los estudiantes a lo largo del curso en Henry. </p>
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
                            <a href="https://github.com/Daniel-Ignacio-Nieto/Proyecto-Final-ft07-04" target="_blank"
                                rel="noopener noreferrer">Repositorio</a>
                        </div>
                    </div>
                </div>
            </Fade>
        </section>
    );
};


export default Portfolio;