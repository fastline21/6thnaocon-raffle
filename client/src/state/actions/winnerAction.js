import axios from 'axios';
import { GET_WINNER, WINNERS_ERROR } from './types';

// Get winner
export const getWinner = () => async (dispatch) => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const res = await axios.post('/api/winner', config);
        dispatch({
            type: GET_WINNER,
            payload: res.data,
        });
    } catch (error) {
        dispatch({
            type: WINNERS_ERROR,
            payload: error.response.data,
        });
    }
};
