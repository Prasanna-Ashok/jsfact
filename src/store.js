import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {courseTypeReducer} from './reducers/courseTypeReducer';
import {enrollCourseReducer} from './reducers/enrollCourseReducer';
import {paymentReducer} from './reducers/paymentReducer';

const store = createStore(combineReducers({courseTypeReducer, enrollCourseReducer, paymentReducer}), applyMiddleware(thunk));

export default store;