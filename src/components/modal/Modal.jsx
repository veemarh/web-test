import React from "react";
import Backdrop from "./Backdrop";
import styles from "./modal.module.css";
import {createPortal} from "react-dom";

export default function Modal({isOpen, onClose, children}) {
    if (!isOpen) return null;

    return createPortal(
        <>
            <Backdrop onClick={onClose}/>
            <div className={styles.modalWrapper}>
                <div className={styles.modal}>
                    {children}
                </div>
            </div>
        </>,
        document.getElementById('portal')
    );
};
