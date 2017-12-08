import axios from 'axios';
const ROOT_URL = 'http://localhost:3090';
import {browserHistory} from 'react-router'

export function signInUser ({email, password}) {

    return function (dispatch) {
        // Submit email/password to the server and
        axios.post(`${ROOT_URL}/signin`, {email, password})
            .then(response => {
                // if request is good...
                //  - Update state to indicate user is authenticated
                //  - Save the JWT token,
                //  - redirect to the router '/feature'
                browserHistory.push('/feature');
            })
            .catch(() => {
                // If request is bad...
                //  - Shown an error to user


            })

    }
}