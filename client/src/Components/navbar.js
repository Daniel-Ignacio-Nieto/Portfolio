import React from "react";
import Barrita from "../Assets/Iconos/barritas.png"
import "./navbar.css";



const NavBar = () => {

    function showmenu() {
        document.getElementById("otroModo").classList.toggle("show");
    }

    console.log(window.location.host, "soy el host")

    return (
        <nav className="nav-menu">
            <span className="nav-barrita" onClick={() => showmenu()}>
                <img src={Barrita} alt="Menu" className="nav-barrita-img" width="35" height="35" />
            </span>
            <ul className="nav-menu-items" id="otroModo">
                <li><a href="/#Who" onClick={() => showmenu()}>Inicio</a></li>
                <li><a href="/#Portfolio" onClick={() => showmenu()}>Portfolio</a></li>
                <li><a href="/AboutMe" onClick={() => showmenu()}>Sobre Mí</a></li>
                <li><a href="/Skills" onClick={() => showmenu()}>Habilidades</a></li>
                <li><a href="#Footer" onClick={() => showmenu()}>Contacto</a></li>
            </ul>
        </nav>
    );
};

export default NavBar;