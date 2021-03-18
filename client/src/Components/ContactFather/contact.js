import React, { useState } from "react";
import Modal from "../Modal/Modal.js";
import emailJS from "emailjs-com";

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
                alert("se envio con exito", result.text);
            }, (error) => {
                alert("Error al enviar el mensaje.", error.message);
            });
        setClose(!close)
    };

    return (
        <section id="Contact">
            <button onClick={() => setClose((val) => !val)}>Hablemos</button>
            <Modal title="Contacto" show={close} onClose={() => setClose((val) => !val)}>
                <h3 class=""></h3>
                <form onSubmit={sendEmail} class="">
                    <div class="">
                        <label class="">
                            Asunto
                            <input type="text" class="" name="Title" onChange={(e) => handleOnChange(e)} placeholder="Ej: Oferta Laboral" required title="Debe ingresar un Asunto/Titulo" />
                        </label>
                    </div>
                    <div class="">
                        <label class="">
                            Nombre
                            <input type="text" class="" name="Name" onChange={(e) => handleOnChange(e)} placeholder="Ej: Ignacio Nieto" required title="Debe ingresar un nombre" />
                        </label>
                    </div>
                    <div class="">
                        <label class="">
                            Email
                            <input type="email" class="" name="Email" onChange={(e) => handleOnChange(e)}
                                placeholder="Ej: tuCorreo@gmail.com" title="Debe ingresar un email" required />
                        </label>
                    </div>
                    <div class="">
                        <label class="">
                            Mensaje
                            <input type="text" class="" name="Message" onChange={(e) => handleOnChange(e)} placeholder="Este mensaje se envia directo a mi casilla de correo electronico, siente libre de escribirme, me comunicare contigo cuanto antes" required title="Debe ingresar un Mensaje" />
                        </label>
                    </div>
                    <div class="">
                        <input class="" type="submit" value="Enviar" />
                    </div>
                </form>
            </Modal>

        </section>
    );


};

export default Contact;