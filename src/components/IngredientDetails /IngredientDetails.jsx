import style from './IngredientDetails.module.css'

export const IngredientDetails = ({ data }) => {
    return (
        <>
            <img src={data.image_large}></img>
            <p className="text text_type_main-medium">{data.name}</p>
            <ul className={style.list}>
                <li className={style.list_item + ' text text_type_digits-default text_color_inactive'}>
                    <p>Калории, ккал</p>{data.calories}
                </li>
                <li className={style.list_item + ' text text_type_digits-default text_color_inactive'}>
                    <p>Белки, г</p>{data.proteins}
                </li>
                <li className={style.list_item + ' text text_type_digits-default text_color_inactive'}>
                    <p>Жиры, г</p>{data.fat}
                </li>
                <li className={style.list_item + ' text text_type_digits-default text_color_inactive'}>
                    <p>Углеводы, г</p>{data.carbohydrates}
                </li>

            </ul>

        </>
    )
}