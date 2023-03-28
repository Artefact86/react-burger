
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components"
import { createPortal } from "react-dom"
import PropTypes from 'prop-types';
import style from './Modal.module.css'
import { ModalOverlay } from '../ModalOverlay/ModalOverlay'
import { useEffect } from "react";

const modalRoot = document.querySelector('#modals');

export const Modal = ({ title, onClose, children }) => {

    useEffect(() => {
        function closePopupEsc(event) {
            if (event.key === "Escape" || event.key === "Esc") {
                onClose();
            }

        }
        document.addEventListener("keyup", closePopupEsc);
    })


    return createPortal(
        <>
            <div className={style.popup}>
                <div className={style.title}>
                    <h2 className={style.popup_text + ' text text_type_main-large'}>{title}</h2>
                    <CloseIcon onClick={onClose} />
                </div>
                {children}
            </div>
            <ModalOverlay onClick={onClose}></ModalOverlay>
        </>,
        modalRoot
    )
}

Modal.propTypes = {
    title: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired

}