import axios from 'axios';

export const FETCH_USERS = 'fetchuser'
export const fetchUsers = () => async (dispatch, getState, axiosApi) => { // api passed in via applyMiddleware
    const res = await axiosApi.get("/users");

    dispatch({
        type: FETCH_USERS,
        payload: res
    })
}