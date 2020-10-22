import { combineReducers } from 'redux';
import portsListReducer from './components/Ports/reducers';
import vesselsListReducer from './components/Vessels/reducers';

export default combineReducers({
    portsListReducer,
    vesselsListReducer
});