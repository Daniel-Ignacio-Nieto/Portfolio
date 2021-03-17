import React from "react";
import GitHub from "../Assets/Iconos/github-black.png";
import LinkedIn from "../Assets/Iconos/linkedin.png"

const Footer = () => {


    return (
        <>
            <div class="">
                <img src={GitHub} alt="GitHub" class="" width="100" height="100" />
                <img src={LinkedIn} alt="LinkedIn" class="" width="100" height="100" />
                <a href="" class="">nieto.ignacio65@gmail.com</a>
            </div>
        </>
    );
};

export default Footer;