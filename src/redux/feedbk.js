import { connectAdvanced } from 'react-redux';
import { actions } from 'react-redux-form';

import * as ActionTypes from './ActionTypes';
//reducer feedback

export const Feedbk = (state = { posted: false,
    }, action) => {
    switch (action.type) {
        case ActionTypes.FEEDBACK_POSTED:
            const fdbck=action.payload;
            alert('feedback posted:' + JSON.stringify(fdbck));
            console.log('feedback posted');
            return {...state, posted: true};

        case ActionTypes.FEEDBACK_FAILED:    
                const errMess=action.payload;      
                alert('feedback failed:' + errMess);
                console.log('feedback failed');
                return {...state, posted: false};
  
        default:
            return state;
    }
};