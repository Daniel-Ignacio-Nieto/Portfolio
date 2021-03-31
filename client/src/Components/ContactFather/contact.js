import React, { useState } from "react";
import Modal from "../Modal/Modal.js";
import emailJS from "emailjs-com";
import Swal from 'sweetalert2';
import "./contact.css";

const { REACT_APP_EMAIL_SERVICE_ID,
    REACT_APP_EMAIL_TEMPLATE_ID,
    REACT_APP_EMAIL_USER_ID } = process.env;

const Contact = () => {

    const [close, setClose] = useState(false);
    const [data, setData] = useState({});

    const handleOnChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    };

    const sendEmail = (e) => {
        e.preventDefault()

        emailJS.send(`${REACT_APP_EMAIL_SERVICE_ID}`, `${REACT_APP_EMAIL_TEMPLATE_ID}`, data, `${REACT_APP_EMAIL_USER_ID}`)
            .then((result) => {
                Swal.fire({
                    icon: 'success',
                    title: `Email enviado con exito ${result.text}`,
                    showConfirmButton: false,
                    timer: 3000
                })
            }, (error) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `Há ocurrido un error, por favor intente de nuevo, caso contrario comunicarse por otros medios por favor
                     ${error.message}`,
                })
            });
        setClose(!close)
    };

    return (
        <section id="Contact" className="Contact-Container">
            <div className="Contact-btn" onClick={() => setClose((val) => !val)}>CONTACTO</div>
            <Modal title="Hablemos" show={close} onClose={() => setClose((val) => !val)}>
                <form onSubmit={sendEmail} className="Contact-Form">
                    <div className="Contact-Form-Data">
                        <label>
                            Asunto
                        </label>
                        <input type="text" name="Title" onChange={(e) => handleOnChange(e)} placeholder="Ej: Oferta Laboral" required title="Debe ingresar un Asunto/Título" />
                    </div>
                    <div className="Contact-Form-Data">
                        <label>
                            Nombre
                        </label>
                        <input type="text" name="Name" onChange={(e) => handleOnChange(e)} placeholder="Ej: Ignacio Nieto" required title="Debe ingresar un nombre" />
                    </div>
                    <div className="Contact-Form-Data">
                        <label>
                            Email
                        </label>
                        <input type="email" name="Email" onChange={(e) => handleOnChange(e)}
                            placeholder="Ej: tuCorreo@gmail.com" title="Debe ingresar un email" required />
                    </div>
                    <div className="Contact-Form-Data">
                        <label id="Contact-F-D-LabelMSJ">
                            Mensaje
                        </label>
                        <textarea type="text" id="Contact-F-D-MSJ" name="Message" onChange={(e) => handleOnChange(e)}
                            placeholder="Este mensaje se envía directo a mí casilla de correo electrónico, siéntete libre de escribirme, me comunicaré contigo cuanto antes" required title="Debe ingresar un Mensaje" />
                    </div>
                    <div className="Contact-Form-Data">
                        <input id="Contact-F-D-Btn" type="submit" value="Enviar" />
                    </div>
                </form>
            </Modal>
        </section>
    );


};

export default Contact;