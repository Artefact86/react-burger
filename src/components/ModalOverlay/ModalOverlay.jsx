import style from './ModalOverlay.module.css'
import PropTypes from 'prop-types';

export const OverlayPopup = ({ onClick }) => {
  return (
    <>
      <div className={style.overlay} onClick={onClick}>

      </div>
    </>

  )
}

OverlayPopup.propTypes = {
  onClick: PropTypes.func
}