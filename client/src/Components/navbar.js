import React from "react";
import Barrita from "../Assets/Iconos/barritas.png"
import "./navbar.css";



const NavBar = () => {

    function showmenu() {
        document.getElementById("otroModo").classList.toggle("show");
    }


    return (
        <nav className="nav-menu">
            <span className="nav-barrita" onClick={() => showmenu()}>
                <img src={Barrita} alt="Menu" className="nav-barrita-img" width="35" height="35" />
            </span>
            <ul className="nav-menu-items" id="otroModo">
                <li><a href="/" onClick={() => showmenu()}>Portafolio</a></li>
                <li><a href="/AboutMe" onClick={() => showmenu()}>Sobre Mi</a></li>
                <li><a href="/Skills" onClick={() => showmenu()}>Habilidades</a></li>
                <li><a href="#Footer" onClick={() => showmenu()}>Contacto</a></li>
            </ul>
        </nav>
    );
};

export default NavBar;