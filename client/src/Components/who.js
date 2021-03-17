import React from "react";
import Photo from "../Assets/ftPerfil.jpg";
import CV from "../Assets/Cv Ignacio Nieto.pdf";


const Who = () => {

    return (
        <section id="Who">
            <div className="">
                <h1 className="">Ignacio Nieto</h1>
                <p className="">¡Hola! Soy Full Stack Web Developer, con ansias seguir creciendo y puliendo mis conocimientos tanto en Front como en Back-End</p>
            </div>
            <div className="">
                <img src={Photo} alt="Foto de Ignacio Nieto" width="200" height="200" />
            </div>
            <a href={CV} className="" download="Cv Ignacio Nieto.pdf">
                Descargar CV
                </a>

        </section>
    );
};

export default Who;