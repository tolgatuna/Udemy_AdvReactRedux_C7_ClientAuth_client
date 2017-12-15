import {FETCH_MESSAGE} from "../actions/type";


export default function (state={},action) {
    switch (action.type) {
        case FETCH_MESSAGE: {
            state={
                ...state,
                message: action.payload
            };
            break;
        }

    }
    return state;
}