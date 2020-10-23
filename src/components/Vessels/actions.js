import { PORTCHAIN_API_URL } from '../../config';
import { FETCH_VESSELS } from './constants';
import axios from 'axios';

export const vesselsLoadCallAction = (vessels) => {
    return {
        type: FETCH_VESSELS,
        vessels
    }
};

export const vesselsLoadAllCallAction = (query) => {
    return (dispatch) => {
        return axios.get(`${PORTCHAIN_API_URL}/vessels${query}`)
            .then(response => dispatch(vesselsLoadCallAction(response.data)))
            .catch(error => {
                console.log(error);
                throw(error);
            });
    };
};