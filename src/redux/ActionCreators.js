import * as ActionTypes from './ActionTypes';
import { DISHES } from '../shared/dishes';
import { baseUrl } from '../shared/baseUrl';


/**********************Dishes Actions****************************/

//esto es un thunk en lugar de una accion. En lugar de llamar al reducer redux-middleware llama a esta funcion. Desde aca se hacen los llamados a las acciones los cuales pueden ser asincronicos
export const fetchDishes = () => (dispatch) => {

    dispatch(dishesLoading(true));

    return fetch(baseUrl + 'dishes')
    .then(response=>response.json())
    .then(dishes=>dispatch(addDishes(dishes)))
    
    
}


export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
});

export const dishesFailed = (errmess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmess
});

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});

/**********************Comments Actions****************************/
export const fetchComments = () => (dispatch) => {
    return fetch(baseUrl + 'comments')
    .then(response=>response.json())
    .then(comments=>dispatch(addComments(comments)));
    
}

export const addComments=(comments)=>({
    type:ActionTypes.ADD_COMMENTS,
    payload:comments
})

export const commentsFailed = (errmess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmess
});

//accion para agregar comentario. Type define que reducer usar y payload es el dato que se le pasa al reducer.
export const addComment = (dishId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
});



/**********************Promos Actions****************************/

export const fetchPromos = () => (dispatch) => {

    dispatch(promosLoading(true));

    return fetch(baseUrl + 'promotions')
    .then(response=>response.json())
    .then(promos=>dispatch(addPromos(promos)))   
    
}


export const promosLoading = () => ({
    type: ActionTypes.PROMOS_LOADING
});

export const promosFailed = (errmess) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: errmess
});

export const addPromos = (promos) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promos
});