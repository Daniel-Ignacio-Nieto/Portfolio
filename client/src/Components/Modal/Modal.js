import React from 'react';
import Slide from 'react-reveal/Slide';
import './Modal.css';


const Modal = ({ children, title, show, onClose }) => {
    return show ? (
        <div className="modal">
            <Slide right>
                <div className="content">
                    <div className="header">
                        <button className="close-modal" onClick={() => {
                            onClose && onClose()
                        }}>
                            x
                    </button>
                    </div>
                    <div className="body-modal">
                        <span className="title">{title}</span>
                        {children}
                    </div>
                </div>
            </Slide>
        </div>
    ) : null;
}


export default Modal;