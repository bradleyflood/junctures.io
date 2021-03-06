import actions from '../actions/types';
import routes from '../routes';

const defaultState = {
	redirectTo: null,
	appReady: false
};

const commonReducer = (state = defaultState, action = {}) => {
	switch (action.type) {
		case actions.GOTO:
			return {
				...state,
				redirectTo: action.payload
			};
		case actions.REDIRECTED:
			return {
				...state,
				redirectTo: null
			};
		case actions.AUTH_ATTEMPT_REGISTER_FULFILLED:
			return {
				...state,
				redirectTo: routes.juncturesCreate.path
			};
		case actions.AUTH_ATTEMPT_SIGNIN_FULFILLED:
		case actions.JUNCTURE_CREATE_FULFILLED:
		case actions.JUNCTURE_EDIT_FULFILLED:
		case actions.JUNCTURE_DELETE_FULFILLED:
			return {
				...state,
				redirectTo: routes.junctures.path
			};
		case actions.AUTH_SIGN_OUT_FULFILLED:
			return {
				...state,
				redirectTo: routes.home.path
			};
		case actions.USER_AUTHENTICATED:
		case actions.USER_NOT_AUTHENTICATED:
			return {
				...state,
				appReady: true
			};
		default:
			return state;
	}
};

export default commonReducer;
