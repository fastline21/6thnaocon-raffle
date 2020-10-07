import axios from 'axios';
import {
	GET_WINNER,
	WINNERS_ERROR,
	SET_SHOW,
	GET_WINNERS,
	CLEAR_WINNERS,
	SET_DATE,
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
export const getWinners = (date) => async (dispatch) => {
	try {
		setShow()(dispatch);
		setDate(date)(dispatch);
		const res = await axios.get('/api/winner?date=' + date);
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

export const setShow = () => (dispatch) => {
	dispatch({
		type: SET_SHOW,
	});
};

export const setDate = (date) => (dispatch) => {
	dispatch({
		type: SET_DATE,
		payload: date,
	});
};

// Clear winners
export const clearWinners = (date) => async (dispatch) => {
	try {
		setShow()(dispatch);
		await axios.delete('/api/winner?date=' + date);
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
