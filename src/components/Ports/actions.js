import { PORTCHAIN_API_URL } from '../../config';
import { FETCH_PORTS } from './constants';
import axios from 'axios';

export const portsLoadCallAction = (ports) => {
    return {
        type: FETCH_PORTS,
        ports
    }
};

export const portsLoadAllCallAction = (query) => {
    return (dispatch) => {
        return axios.get(`${PORTCHAIN_API_URL}/ports${query}`)
            .then(response => dispatch(portsLoadCallAction(response.data)))
            .catch(error => {
                console.log(error);
                throw(error);
            });
    };
};