import axios from "axios";

// Redux type
import { GET_IMAGE } from "./image.type";

export const getImage = (_id) => async (dispatch) => {
    try {
        const image = await axios({
            method: "GET",
            url: `https://craveeats-server-a514484aed4c.herokuapp.com/image/${_id}`,
        });

        return dispatch({ type: GET_IMAGE, payload: image.data });
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error });
    }
};