import { Dishes } from './dishes';
import { Promotions } from './promotions';
import { Leaders} from './leaders';
import { Comments } from './comments';
import {Feedbk} from './feedbk'
import {createStore, combineReducers, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { createForms } from 'react-redux-form';
import { InitialFeedback } from './forms';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            feedbk:Feedbk,
            leaders: Leaders,
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,            
            ...createForms({
                feedback:InitialFeedback //crea un formulario llamado feedback
            })
        }) ,
        applyMiddleware(thunk, logger)//log de acciones y estados
    );

    return store;
}