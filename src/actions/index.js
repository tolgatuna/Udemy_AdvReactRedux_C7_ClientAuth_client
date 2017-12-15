import axios from 'axios';
const ROOT_URL = 'http://localhost:3090';
import {browserHistory} from 'react-router'
import {
    AUTH_ERROR,
    AUTH_USER,
    UNAUTH_USER,
    FETCH_MESSAGE
} from "./type";

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

export function singOutUser() {
    localStorage.removeItem('token');
    return {type: UNAUTH_USER};
}

export function signUpUser({email, password}) {

    return function (dispatch) {
        // Submit email/password to the server and
        axios.post(`${ROOT_URL}/signup`, {email, password})
            .then(response => {
                // if request is good...
                //  - Update state to indicate user is authenticated
                dispatch({type: AUTH_USER});
                //  - Save the JWT token
                localStorage.setItem('token', response.data.token);
                //  - redirect to the router '/feature'
                browserHistory.push('/feature');
            })
            .catch(response => {
                // If request is bad...
                //  - Shown an error to user
                console.log('RESPONSE : ',response);
                dispatch(authError(response.response.data.error));
            })
    }
}

export function authError(error) {
    return {
        type: AUTH_ERROR, payload: error
    };
}

export function fetchMessage() {

    return function (dispatch) {
        axios.get(`${ROOT_URL}`,{
            headers: {authorization: localStorage.getItem('token')}
        })
            .then(response => {
                dispatch({type: FETCH_MESSAGE, payload: response.data.message});
            })
    }
}