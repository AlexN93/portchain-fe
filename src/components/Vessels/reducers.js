import { FETCH_VESSELS } from './constants';

const initialState = {
    vessels: []
};

function vesselsListReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_VESSELS:
            const vessels = (action.vessels && action.vessels.length) ? action.vessels : [];
            return {...state, ...{vessels}};
        default:
            return state;
    }
}

export default vesselsListReducer;