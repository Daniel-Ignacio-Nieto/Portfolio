import React from "react";
import JS from "../Assets/Iconos/JS-Icon.jpg";
import TS from "../Assets/Iconos/typescript.png";
import HTML from "../Assets/Iconos/html5.png";
import CSS from "../Assets/Iconos/css.png";
import R3ACT from "../Assets/Iconos/react.png";
import R3DUX from "../Assets/Iconos/redux.png";
import NOD from "../Assets/Iconos/node-JS.png";
import EX from "../Assets/Iconos/expressJS.png";
import SQL from "../Assets/Iconos/sequelize.png";
import PSGRE from "../Assets/Iconos/postgresql.png";
import MONGO from "../Assets/Iconos/MongoDB-hoja.png";
import PASSP from "../Assets/Iconos/PassportJS.png";
import MAIL from "../Assets/Iconos/mailgunJS.png";
import "./skills.css";



const Skills = () => {


    return (
        <>
            <div className="Skills-Container">
                <div className="Skills-Card">
                    <img src={JS} alt="JavaScript" class="" height="100" width="100" />
                    <p>JavaScript</p>
                </div>
                <div className="Skills-Card">
                    <img src={TS} alt="Typescript" class="" height="100" width="100" />
                    <p class="">Typescript</p>
                </div>
                <div className="Skills-Card">
                    <img src={HTML} alt="HTML5" class="" height="100" width="100" />
                    <p class="">HTML5</p>
                </div>
                <div className="Skills-Card">
                    <img src={CSS} alt="CSS3" class="" height="100" width="100" />
                    <p class="">CSS3</p>
                </div>
                <div className="Skills-Card">
                    <img src={R3ACT} alt="React" class="" height="100" width="100" />
                    <p class="">React</p>
                </div>
                <div className="Skills-Card">
                    <img src={R3DUX} alt="Redux" class="" height="100" width="100" />
                    <p class="">Redux</p>
                </div>
                <div className="Skills-Card">
                    <img src={NOD} alt="NodeJS" class="" height="100" width="100" />
                    <p class="">NodeJS</p>
                </div>
                <div className="Skills-Card">
                    <img src={EX} alt="Express" class="" height="100" width="100" />
                    <p class="">Express</p>
                </div>
                <div className="Skills-Card">
                    <img src={SQL} alt="Sequelize" class="" height="100" width="100" />
                    <p class="">Sequelize</p>
                </div>
                <div className="Skills-Card">
                    <img src={PSGRE} alt="PostgreSQL" class="" height="100" width="100" />
                    <p class="">PostgreSQL</p>
                </div>
                <div className="Skills-Card">
                    <img src={MONGO} alt="MongoDB" class="" height="100" width="100" />
                    <p class="">MongoDB</p>
                </div>
                <div className="Skills-Card">
                    <img src={PASSP} alt="Passport" class="" height="100" width="100" />
                    <p class="">Passport</p>
                </div>
                <div className="Skills-Card">
                    <img src={MAIL} alt="Mailgun" class="" height="100" width="100" />
                    <p class="">Mailgun</p>
                </div>
            </div>
        </>
    );
};


export default Skills;