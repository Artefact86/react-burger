import style from './AppHeader.module.css';
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';

export const Appheader = () => {
    return (
        <header className={style.header}>
            <nav className= {`${style.nav} p-4`}>
                <div className={style.header__column}>
                  <a href='#' className= {style.link}>
                    <BurgerIcon type="primary"/>
                    <p className='text text_type_main-default ml-2 mr-8'>Конструктор</p>
                  </a>
                  <a href='#' className= {style.link_active}>
                    <ListIcon type="secondary"/>
                    <p className='text text_type_main-default text_color_inactive ml-2'>Лента заказов</p>
                  </a>
                </div>
              <div className={style.header__column}>
                <Logo/>
              </div>
              <div className={style.header__column}>
                <a href='#' className={style.link}>
                  <ProfileIcon type="secondary"/>
                  <p className='text text_type_main-default text_color_inactive ml-2'>Личный кабинет</p>
                </a>
              </div>              
            </nav>
        </header>
    )
}

