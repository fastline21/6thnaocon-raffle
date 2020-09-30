import { combineReducers } from 'redux';
import participantReducer from './participantReducer';
import winnerReducer from './winnerReducer';

export default combineReducers({
    participantState: participantReducer,
    winnerState: winnerReducer,
});
