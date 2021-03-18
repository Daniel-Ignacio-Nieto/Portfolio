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
                <li className="item-active"><a href="/">Home</a></li>
                <li><a href="/AboutMe">Sobre Mi</a></li>
                <li><a href="/Skills">Habilidades</a></li>
                <li><a href="#Portfolio">Portfolio</a></li>
                <li><a href="#Footer">Contacto</a></li>
                <li><a href="#">NOSE</a></li>
            </ul>
        </nav>
    );
};

export default NavBar;