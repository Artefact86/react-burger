const BURGER_API_URI = 'https://norma.nomoreparties.space/api';

const getResponse = (res) => {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
};

// export const listenRequest = (res) => {
//   return res.ok ? res.json() : res.json().then(err => Promise.reject(err))
// }

export const getIngredients = () => {
    return fetch(`${BURGER_API_URI}/ingredients`)
        .then(getResponse)
        .then(dataIngredients => {
            console.log(dataIngredients);
            if (dataIngredients.success) {
                console.log(dataIngredients);
                return dataIngredients.data;
            }
            
        })
        .catch(err=>{console.log(err)})
}