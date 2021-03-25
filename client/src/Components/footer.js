import React from "react";
import GitHub from "../Assets/Iconos/github-black.png";
import LinkedIn from "../Assets/Iconos/linkedin.png";
import "./footer.css";

const Footer = () => {


    return (
        <section id="Footer" className="Footer-Container">
            <div className="Footer-Data">
                <a href="https://github.com/Daniel-Ignacio-Nieto" target="_blank" rel="noopener noreferrer" id="Footer-Data-Link-img">
                    <img src={GitHub} alt="GitHub" />
                </a>
                <a href="https://www.linkedin.com/in/ignacio-nieto/" target="_blank" rel="noopener noreferrer" id="Footer-Data-Link-img">
                    <img src={LinkedIn} alt="LinkedIn" id="img-linkedin" />
                </a>
            </div>
            <div className="Footer-Data">
                <a href="mailto:nieto.ignacio65@gmail.com?Subject=Oferta%20Laboral" target="_blank" rel="noopener noreferrer" class="">nieto.ignacio65@gmail.com</a>
            </div>
        </section>
    );
};

export default Footer;