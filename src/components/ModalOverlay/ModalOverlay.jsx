import style from './ModalOverlay.module.css'
import PropTypes from 'prop-types';

export const ModalOverlay = ({ onClick }) => {
  return (
  
      <div className={style.overlay} onClick={onClick}>

      </div>
  

  )
}

ModalOverlay.propTypes = {
  onClick: PropTypes.func.isRequired
}