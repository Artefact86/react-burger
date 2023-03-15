import { BurgerIngredient } from '@ya.praktikum/react-developer-burger-ui-components'
import { useState } from 'react';
import PropTypes from 'prop-types';
import { IngredientDetails } from '../IngredientDetails /IngredientDetails';
import { Popup } from '../Modal/Modal';
import style from './Category.module.css';
import { ingredientPropTypes } from '../../utils/prop-types';

export const Category = ({title, id, ingredients}) => {
    const [ingredientModal, setIngredientModal] = useState(null)
    const closeModalIngredient = () => { setIngredientModal() }
    return (
        <>
            <h2 className="text text_type_main-medium mt-10" id={id}>{title}</h2>
            <div className={style.category}>
                {ingredients?.map(data => <BurgerIngredient key={data._id} {...data} count={1} 
                 onClick={() => setIngredientModal(data)}/>)}
            </div>
            {ingredientModal && <Popup title='Детали ингредиента' onClose={closeModalIngredient}><IngredientDetails data={ingredientModal}/></Popup>}

        </>

    )
}

Category.propTypes = {
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(ingredientPropTypes.isRequired).isRequired

}

