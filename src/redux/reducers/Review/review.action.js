import axios from "axios";

// redux
import { GET_REVIEW, POST_REVIEW } from "./review.type";

export const getReviews = (resId) => async (dispatch) => {
    try {
        const reviewList = await axios({
            method: "GET",
            url: `https://craveeats-server-a514484aed4c.herokuapp.com/review/${resId}`,
        });
        console.log(reviewList);
        return dispatch({ type: GET_REVIEW, payload: reviewList.data });
    } catch (error) {
        dispatch({ type: "ERROR", payload: error });
    }
};

export const postReview = (reviewData) => async (dispatch) => {
    try {
        await axios({
            method: "POST",
            url: `https://craveeats-server-a514484aed4c.herokuapp.com/review/new`,
            data: { reviewData },
        });
        console.log("Posted review", reviewData);

        return dispatch({ type: POST_REVIEW, payload: reviewData });
    } catch (error) {
        dispatch({ type: "ERROR", payload: error });
    }
};