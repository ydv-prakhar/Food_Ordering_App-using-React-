import classes from './Modal.module.css';
import React from 'react';
import ReactDOM from 'react-dom';

function Backdrop(props) {
    return <div className={classes.backdrop}></div>
}

function ModalOverlay(props) {
    return <div className={classes.modal}>
        <div className={classes.content}>
            {props.children}
        </div>
    </div>
};
const portalElements= document.getElementById('overlays');
function Modal(props) {
    return <React.Fragment>
        {ReactDOM.createPortal(<Backdrop/>,portalElements)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElements)}
    </React.Fragment>
};

export default Modal;