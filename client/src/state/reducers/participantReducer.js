import {
	ADD_PARTICIPANT,
	GET_PARTICIPANTS,
	PARTICIPANTS_ERROR,
	SET_LOADING,
} from './../actions/types';

const initialState = {
	participants: null,
	error: null,
	loading: false,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case GET_PARTICIPANTS:
			return {
				...state,
				participants: action.payload,
				loading: false,
			};
		case ADD_PARTICIPANT:
			return {
				...state,
				participants: [...state.participants, action.payload],
				loading: false,
			};
		case PARTICIPANTS_ERROR:
			return {
				...state,
				error: action.payload,
			};
		case SET_LOADING:
			return {
				...state,
				loading: true,
			};
		default:
			return state;
	}
};
