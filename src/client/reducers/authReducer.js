import { FETCH_CURRENT_USER } from '../actions';

export default function (state = null, action) {
    // console.log(action, "auth reducer action type")
    // console.log(state, "current state")
    switch (action.type) {
        case FETCH_CURRENT_USER:
            return action.payload.data || false;
        default:
            return state;
    }
}