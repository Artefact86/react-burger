import { Button, ConstructorElement, CurrencyIcon, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useState } from 'react';
import PropTypes from 'prop-types';
import style from './BurgerConstructor.module.css';
import { OrderDetails } from '../OrderDetails/OrderDetails'
import { Modal } from '../Modal/Modal';

export const BurgerConstructor = ({ constructorIngredients }) => {
  const [ingredientModal, setIngredientModal] = useState(false);
  const closePopup = () => {setIngredientModal(false)};
  const buns = constructorIngredients?.find(data => data.type === 'bun');
  const lastElement = constructorIngredients?.find(data => data.type === 'bun');
  const noElement = constructorIngredients?.filter(data => data.type !== 'bun');


  return (
    <section className={style.section}>
      <div className={style.element_up + ' mb-4'}>
        <ConstructorElement {...buns} type='top' thumbnail={buns?.image} text={buns?.name + ' (верх)'} key={buns?._id} isLocked={true} />
      </div>
      <div className={style.elements + ' custom-scroll'}>
        {noElement?.map(data => <div className={style.element_box + ' mb-4'} key={data._id}>
          <DragIcon className={style.DragIcon} />
          <ConstructorElement thumbnail={data.image} key={data._id} text={data.name} {...data} />
        </div>)}
      </div>
      <div className={style.element_up}>
        <ConstructorElement {...lastElement} type='bottom' thumbnail={lastElement?.image} 
        key={lastElement?._id} text={lastElement?.name + ' (низ)'} isLocked={true}/>
      </div>
      <div className={style.count}>
        <div className={style.count_icon_number}>
          <p className="text text_type_digits-medium mr-2">000</p>
          <CurrencyIcon type="primary" />
        </div>
        <Button htmlType="button" type="primary" size="large" onClick={() => {setIngredientModal(true)}}>
          Оформить заказ
        </Button>
      </div>
      {ingredientModal && <Modal onClose={closePopup}><OrderDetails orderId={645}/></Modal>}
    </section>
  )
}

BurgerConstructor.propTypes = PropTypes.arrayOf(PropTypes.shape({        
  text: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  isLocked: PropTypes.bool.isRequired,
  extraClass: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired
})).isRequired

ConstructorElement.propTypes = PropTypes.arrayOf(PropTypes.shape({        
  text: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  isLocked: PropTypes.bool.isRequired,
  extraClass: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired
})).isRequired