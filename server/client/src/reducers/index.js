
import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authreducer from './authReducer';


export default combineReducers({
	auth: authreducer,
	form: reduxForm
});