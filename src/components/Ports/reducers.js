import { FETCH_PORTS } from './constants';

const initialState = {
    ports: []
};

function portsListReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_PORTS:
            const ports = (action.ports && action.ports.length) ? action.ports : [];
            return {...state, ...{ports}};
        default:
            return state;
    }
}

export default portsListReducer;