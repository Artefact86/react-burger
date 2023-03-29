import style from './OrderDetails.module.css'
import PropTypes from 'prop-types';
import image from '../../images/done.svg'



export const OrderDetails = ({ orderId }) => {
    return (
        <>
            {/* <div className={style.order}> */}
                <p className={style.digits + ' text text_type_digits-large'}>{orderId}</p>
                <p className="text text_type_main-medium">идентификатор заказа</p>
                <img className={style.image} src={image} alt='logo'></img>
                <p className="text text_type_main-default">Ваш заказ начали готовить</p>
                <p className="text text_type_main-default text_color_inactive mt-2 mb-6">Дождитесь готовности на орбитальной станции</p>
            {/* </div> */}

        </>

    )
}

OrderDetails.propTypes = {
    orderId: PropTypes.string.isRequired
}