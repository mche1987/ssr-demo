export const FETCH_USERS = 'fetchuser'
export const fetchUsers = () => async (dispatch, getState, axiosApi) => { // api passed in via applyMiddleware
    const res = await axiosApi.get("/users");
    // console.log("res", res)

    dispatch({
        type: FETCH_USERS,
        payload: res
    })
}

export const FETCH_CURRENT_USER = 'fetchcurruser';
export const fetchCurrentUser = () => async (dispatch, getState, axiosApi) => {

    try {
        // console.log("fetching");
        const res = await axiosApi.get("/current_user");
        // console.log("fetched", res);
        dispatch({
            type: FETCH_CURRENT_USER,
            payload: res
        })
    }
    catch (e) {
        console.error("current user query error", e);
    }
}

export const FETCH_ADMINS = "fetch admins";
export const fetchAdmins = () => async (dispatch, getState, axiosApi) => {
    const res = await axiosApi.get('/admins');

    dispatch({
        type: FETCH_ADMINS,
        payload: res
    })
}