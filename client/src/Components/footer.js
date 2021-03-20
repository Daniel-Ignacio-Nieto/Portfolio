import React from "react";
import GitHub from "../Assets/Iconos/github-black.png";
import LinkedIn from "../Assets/Iconos/linkedin.png";
import "./footer.css";

const Footer = () => {


    return (
        <section id="Footer" className="Footer-Container">
            <div className="Footer-Data">
                <img src={GitHub} alt="GitHub" class="" width="100" height="100" />
                <img src={LinkedIn} alt="LinkedIn" class="" width="100" height="100" />
            </div>
            <div className="Footer-Data">
                <a href="" class="">nieto.ignacio65@gmail.com</a>
            </div>
        </section>
    );
};

export default Footer;