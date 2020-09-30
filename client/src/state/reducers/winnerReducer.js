import { GET_WINNER, WINNERS_ERROR } from './../actions/types';

const initialState = {
    winner: null,
    error: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_WINNER:
            return {
                ...state,
                winner: action.payload.winner,
            };
        case WINNERS_ERROR:
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
};
