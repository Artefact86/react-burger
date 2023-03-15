const BURGER_API_URI = 'https://norma.nomoreparties.space/api';

const getResponse = (res) => {
    if(res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
};

export const getIngridients = () => {
    return fetch(`${BURGER_API_URI}/ingredients`)
      .then(getResponse)
      .then(dataIngridients => {
        if(dataIngridients.success) {
            return dataIngridients.data;
        }
      })
}