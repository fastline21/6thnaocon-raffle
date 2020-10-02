import {
	GET_WINNER,
	GET_WINNERS,
	WINNERS_ERROR,
	SET_SHOW,
	CLEAR_WINNERS,
} from './../actions/types';

const initialState = {
	winner: null,
	error: null,
	show: false,
	winners: null,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case GET_WINNER:
			return {
				...state,
				winner: action.payload.winner,
				show: true,
			};
		case WINNERS_ERROR:
			return {
				...state,
				error: action.payload,
			};
		case GET_WINNERS:
			return {
				...state,
				winners: action.payload,
			};
		case CLEAR_WINNERS:
			return {
				...state,
				winners: null,
			};
		case SET_SHOW:
			return {
				...state,
				show: false,
			};
		default:
			return state;
	}
};
