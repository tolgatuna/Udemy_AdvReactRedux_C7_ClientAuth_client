import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import authReducer from './auth';
import messageReducer from './message'

const rootReducer = combineReducers({
    form,
    auth: authReducer,
    messageReducer
});

export default rootReducer;
