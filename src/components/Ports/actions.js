import { FETCH_PORTS } from './constants';
import axios from 'axios';

const apiUrl = 'http://localhost:8080/api';

export const portsLoadCallAction = (ports) => {
    return {
        type: FETCH_PORTS,
        ports
    }
};

export const portsLoadAllCallAction = (query) => {
    return (dispatch) => {
        return axios.get(`${apiUrl}/ports${query}`)
            .then(response => dispatch(portsLoadCallAction(response.data)))
            .catch(error => {
                console.log(error);
                throw(error);
            });
    };
};