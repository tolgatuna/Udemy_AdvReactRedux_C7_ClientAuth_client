import axios from 'axios';
const ROOT_URL = 'http://localhost:3090';
import {browserHistory} from 'react-router'
import {AUTH_ERROR, AUTH_USER} from "./type";

export function signInUser ({email, password}) {

    return function (dispatch) {
        // Submit email/password to the server and
        axios.post(`${ROOT_URL}/signin`, {email, password})
            .then(response => {
                // if request is good...
                //  - Update state to indicate user is authenticated
                dispatch({type: AUTH_USER});
                //  - Save the JWT token
                localStorage.setItem('token', response.data.token);
                //  - redirect to the router '/feature'
                browserHistory.push('/feature');
            })
            .catch(() => {
                // If request is bad...
                //  - Shown an error to user
                dispatch(authError('Bad Login Info!'));
            })

    }
}

export function authError(error) {
    return {
        type: AUTH_ERROR, payload: error
    };
}