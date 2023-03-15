import { useEffect, useState } from "react";
import { Appheader } from "../AppHeader/AppHeader";
import { BurgerConstructor } from "../BurgerConstructor/BurgerConstructor";
import { BurgerIngrediens } from "../BurgerIngredients/BurgerIngredients";
import { getIngridients } from "../../utils/api"
import styleApp from './StyleApp.module.css'


//getIngridients().then(data => console.log(data));


export const App = () => {
  const [ingredients, setIngredients] = useState(null);
  

  useEffect(() => {
    getIngridients().then(data => {
      setIngredients(data);
    })
  }, [])

  return (
    <div className={styleApp.app}>
      <Appheader />
      <div className={styleApp.headerText}>
        <h1 className='text text_type_main-large'>Соберите бургер</h1>
      </div>
      <main className={styleApp.main}>
        <BurgerIngrediens ingredients={ingredients} />
        <BurgerConstructor constructorIngredients={ingredients} />
      </main>
    </div>

  )

}