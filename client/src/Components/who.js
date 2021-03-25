import React from "react";
import Photo from "../Assets/Imagenes/ftPerfilBlack.jpg";
import CV from "../Assets/Cv Ignacio Nieto.pdf";
import Zoom from 'react-reveal/Zoom';
import "./who.css";


const Who = () => {

    return (
        <section id="Who">
            <div className="who-container">
                <div className="who-img">
                    <Zoom>
                        <img src={Photo} alt="Foto de Ignacio Nieto" />
                    </Zoom>
                </div>
                <div className="who-intro">
                    <Zoom>
                        <h1>¡Hola! Soy Ignacio Nieto, desarrollador Web Full Stack, con ansias seguir creciendo y puliendo mis
                            conocimientos tanto en Front como en Back-End</h1>
                        <a href={CV} download="Cv Ignacio Nieto.pdf">
                            Descargar CV
                        </a>
                    </Zoom>
                </div>
            </div>


        </section>
    );
};

export default Who;