import axios from 'axios';
import {
	GET_WINNER,
	WINNERS_ERROR,
	SET_SHOW,
	GET_WINNERS,
	CLEAR_WINNERS,
} from './types';

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

// Display winner
export const getWinners = () => async (dispatch) => {
	try {
		const res = await axios.get('/api/winner');
		dispatch({
			type: GET_WINNERS,
			payload: res.data,
		});
	} catch (error) {
		dispatch({
			type: WINNERS_ERROR,
			payload: error.response.data,
		});
	}
};

export const setShow = () => {
	return {
		type: SET_SHOW,
	};
};

// Clear winners
export const clearWinners = () => async (dispatch) => {
	try {
		await axios.delete('/api/winner');
		dispatch({
			type: CLEAR_WINNERS,
		});
	} catch (error) {
		dispatch({
			type: WINNERS_ERROR,
			payload: error.response.data,
		});
	}
};
