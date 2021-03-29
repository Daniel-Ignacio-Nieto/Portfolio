import React from "react";
import Bounce from 'react-reveal/Bounce';
import Flip from 'react-reveal/Flip';
import "./aboutme.css";


const AboutMe = () => {

    return (
        <section id="AboutMe" className="AboutMe-Container">
            <div className="AboutMe-Description">
                <Bounce>
                    <h1>Sobre mí</h1>
                </Bounce>
                <Flip bottom>
                    <p>Soy desarrollador Web FullStack, disfruto desenvolverme tanto en Back como en Front-End aplicando y
                    puliendo mis conocimientos técnicos e interpersonales.
                    Me gustan mucho los desafíos e incursionarme en nuevas tecnologías, ya que espero seguir creciendo profesional y personalmente.
                    Realicé un bootcamp de +800 horas en HENRY, en el cual me formé como Full Stack trabajando en proyectos reales y complejos utilizando y aprendiendo nuevas tecnologías, así también potencié mis habilidades interpersonales que me ayuda en mi vida diaria.
                    Cuando estoy fuera de la pantalla me gusta hacer ejercicio, salir a correr con mi perro y jugar con él, aprecio la naturaleza y la compañia de mis seres queridos(familia, novia y amigos). A veces leo algún libro o veo alguna serie entretenida y cuando tengo la oportunidad me voy de viaje para renovar energías.
                </p>
                </Flip>
            </div>
        </section>
    );
};

export default AboutMe;