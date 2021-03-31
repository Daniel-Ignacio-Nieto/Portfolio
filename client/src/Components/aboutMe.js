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
                    <p>Me considero una persona honesta, responsable, extrovertida y proactiva. Siempre busco desafíos que me permitan crecer personal y profesionalmente.
                    Empecé a incursionar en el desarrollo de sistemas a partir de un bootcamp en Henry, en donde me preparé y formé como desarrollador FullStack, participando activamente en proyectos reales de gran complejidad, permitiéndome potenciar mis aptitudes, como así también aprender, desarrollar y poner en practica nuevos conocimientos técnicos y habilidades blandas.
                    <br />
                    En cuanto a mi vida personal, me gusta hacer ejercicio, salir a correr y jugar con mi perro, aprecio la naturaleza y la compañia de mis seres queridos(familia, novia y amigos). A veces leo algún libro o veo alguna serie entretenida y cuando tengo la oportunidad me voy de viaje para renovar energías.
                </p>
                </Flip>
            </div>
        </section>
    );
};

export default AboutMe;