
import * as ActionTypes from './ActionTypes';


//reducer para Promotions
export const Promotions=(state={
    promotions:[],
    isLoading:false,
    errMess:null
    }
    ,action)=>{
    switch (action.type) {
        case ActionTypes.PROMOS_LOADING:
            return {...state,isLoading:true,errMess:null,promotions:[]};

        case ActionTypes.ADD_PROMOS:
            return {...state,isLoading:false,errMess:null,promotions:action.payload};

        case ActionTypes.PROMOS_FAILED:
            return {...state,isLoading:false,errMess:action.payload,promotions:[]};


        default:
          return state;
      }

}