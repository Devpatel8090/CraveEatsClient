import axios from "axios";

// redux types
import { GET_USER, SELF, CLEAR_USER } from "./user.type";

export const getUser = (_id) => async (dispatch) => {
    try {
        const User = await axios({
            method: "GET",
            url: `https://craveeats-server-a514484aed4c.herokuapp.com/user/${_id}`,
        });

        return dispatch({ type: GET_USER, payload: User.data });
    } catch (error) {
        dispatch({ type: "ERROR", payload: error });
    }
};
export const getMySelf = () => async (dispatch) => {
    try {
        const User = await axios({
            method: "GET",
            url: `https://craveeats-server-a514484aed4c.herokuapp.com/user/`,
        });

        return dispatch({ type: SELF, payload: User.data });
    } catch (error) {
        dispatch({ type: "ERROR", payload: error });
    }
};

export const clearUser = () => async (dispatch) => {
    try {
        return dispatch({ type: CLEAR_USER, payload: {} });
    } catch (error) {
        dispatch({ type: "ERROR", payload: error });
    }
};