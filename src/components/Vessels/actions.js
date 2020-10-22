import { FETCH_VESSELS } from './constants';
import axios from 'axios';

const apiUrl = 'http://localhost:8080/api';

export const vesselsLoadCallAction = (vessels) => {
    return {
        type: FETCH_VESSELS,
        vessels
    }
};

export const vesselsLoadAllCallAction = (query) => {
    return (dispatch) => {
        return axios.get(`${apiUrl}/vessels${query}`)
            .then(response => dispatch(vesselsLoadCallAction(response.data)))
            .catch(error => {
                console.log(error);
                throw(error);
            });
    };
};