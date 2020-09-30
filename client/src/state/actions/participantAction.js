import axios from 'axios';
import {
    ADD_PARTICIPANT,
    PARTICIPANTS_ERROR,
    GET_PARTICIPANTS,
    SET_LOADING,
} from './types';

// Get all participant
export const getParticipants = () => async (dispatch) => {
    try {
        setLoading();

        const res = await axios.get('/api/participant');
        dispatch({
            type: GET_PARTICIPANTS,
            payload: res.data,
        });
    } catch (error) {
        dispatch({
            type: PARTICIPANTS_ERROR,
            payload: error.response.data,
        });
    }
};

// Add participant
export const addParticipant = (participant) => async (dispatch) => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const res = await axios.post('/api/participant', participant, config);
        dispatch({
            type: ADD_PARTICIPANT,
            payload: res.data,
        });
    } catch (error) {
        dispatch({
            type: PARTICIPANTS_ERROR,
            payload: error.response.data,
        });
    }
};

// Set loading to true
export const setLoading = () => {
    return {
        type: SET_LOADING,
    };
};
