import { connectAdvanced } from 'react-redux';
import { actions } from 'react-redux-form';

import * as ActionTypes from './ActionTypes';

export const Comments=(state={
    errMess:null,
    comments:[]}
    ,action)=>{
    switch (action.type) {
        case ActionTypes.ADD_COMMENT:
            var comment=action.payload;
            comment.id=state.comments.length;
            comment.date=new Date().toISOString();
            console.log("new comment: ",comment)
            var newState={};
            return {...state, errMess: null, comments: state.comments.concat(state.comments,comment)};  

        case ActionTypes.ADD_COMMENTS:
            return {...state, errMess: null, comments: action.payload};          

        case ActionTypes.COMMENTS_FAILED:
            return {...state, errMess: action.payload, comments:[]};  

        default:
          return state;
      }

}