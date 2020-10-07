import {
	GET_WINNER,
	GET_WINNERS,
	WINNERS_ERROR,
	SET_SHOW,
	CLEAR_WINNERS,
	SET_DATE,
} from './../actions/types';

const initialState = {
	winner: null,
	error: null,
	show: false,
	winners: null,
	date: Date.now(),
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
				show: true,
			};
		case CLEAR_WINNERS:
			return {
				...state,
				winners: [],
				show: true,
			};
		case SET_DATE:
			return {
				...state,
				date: action.payload,
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
