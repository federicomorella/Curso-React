import * as ActionTypes from './ActionTypes';
import { DISHES } from '../shared/dishes';
import { baseUrl } from '../shared/baseUrl';


/**********************Dishes Actions****************************/

//esto es un thunk en lugar de una accion. En lugar de llamar al reducer redux-middleware llama a esta funcion. Desde aca se hacen los llamados a las acciones los cuales pueden ser asincronicos
export const fetchDishes = () => (dispatch) => {

    dispatch(dishesLoading(true));

    return fetch(baseUrl + 'dishes')
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(response=>response.json())
    .then(dishes=>dispatch(addDishes(dishes)))
    .catch(error => dispatch(dishesFailed(error.message)));
    
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
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(response=>response.json())
    .then(comments=>dispatch(addComments(comments)))
    .catch(error => dispatch(commentsFailed(error.message)));
}

//post comment to the server and get new comment with it's id
export const postComment = (dishId, rating, author, comment) => (dispatch) => { //postea un comentario. 
  const newComment = {
    dishId: dishId,
    rating: rating,
    author: author,
    comment: comment
};
newComment.date = new Date().toISOString();
console.log("new comment");
console.log(newComment);

  return fetch(baseUrl + 'comments', {
      method: "POST",
      body: JSON.stringify(newComment),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "same-origin"
    })
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(response=>response.json())
    .then(comment=>dispatch(addComment(comment))) //si la respuesta es satisfactoria, el servidor devuelve el comentario con el ID asi que mando la respuesta a addComent()
    .catch(error =>  { console.log('post comments', error.message); alert('Your comment could not be posted\nError: '+error.message); });
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
export const addComment = (comment) => ({
  type: ActionTypes.ADD_COMMENT,
  payload: comment
});


/**********************Promos Actions****************************/

export const fetchPromos = () => (dispatch) => {

    dispatch(promosLoading(true));

    return fetch(baseUrl + 'promotions')
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(response=>response.json())
    .then(promos=>dispatch(addPromos(promos)))   
    .catch(error => dispatch(promosFailed(error.message)));
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