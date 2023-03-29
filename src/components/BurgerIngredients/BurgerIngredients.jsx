import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { Category } from '../Category/Category';
import style from './BurgerIngredients.module.css';

export const BurgerIngrediens = ({ ingredients }) => {
  const [current, setCurrent] = useState('buns')


  const buns = ingredients?.filter(item => item.type === 'bun')
  const sauces = ingredients?.filter(item => item.type === 'sauce')
  const main = ingredients?.filter(item => item.type === 'main')

  function handleClickTab(tab) {
    setCurrent(tab)
    const title = document.getElementById(tab)
    if (title) title.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className={style.BurgerIngrediens}>
      <div className={style.menu}>
        <Tab value="buns" active={current === 'buns'} onClick={handleClickTab}>
          Булки
        </Tab>
        <Tab value="sauces" active={current === 'sauces'} onClick={handleClickTab}>
          Соусы
        </Tab>
        <Tab value="main" active={current === 'main'} onClick={handleClickTab}>
          Начинки
        </Tab>
      </div>
      <section className={style.ingredients + ' custom-scroll'}>
        <Category title="Булки" id="buns" ingredients={buns} />
        <Category title="Соусы" id="sauces" ingredients={sauces} />
        <Category title="Начинки" id="main" ingredients={main} />
      </section>


    </section>
  )
}

BurgerIngrediens.propTypes = PropTypes.arrayOf(PropTypes.shape({        
  text: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  isLocked: PropTypes.bool.isRequired,
  extraClass: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired
})).isRequired