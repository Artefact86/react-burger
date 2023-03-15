
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components"
import { createPortal } from "react-dom"
import PropTypes from 'prop-types';
import style from './Modal.module.css'
import { OverlayPopup } from '../ModalOverlay/ModalOverlay'
import { useEffect } from "react";

const modalRoot = document.querySelector('#modals');

export const Popup = ({ title, onClose, children }) => {

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
            <OverlayPopup onClick={onClose}></OverlayPopup>
        </>,
        modalRoot
    )
}

Popup.propTypes = {
    title: PropTypes.string.isRequired,
    onClose: PropTypes.func,
    children: PropTypes.node.isRequired

}