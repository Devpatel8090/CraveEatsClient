import axios from "axios";

// redux types
import { GET_FOOD_LIST, GET_FOOD, GET_FOOD_CATEGORY_LIST } from "./food.type";

export const getFood = (foodId) => async (dispatch) => {
    try {
        const Food = await axios({
            method: "GET",
            url: `https://craveeats-server-a514484aed4c.herokuapp.com/food/${foodId}`,
        });
        return dispatch({ type: GET_FOOD, payload: Food.data });
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error });
    }
};

export const getFoodCategories = () => async (dispatch) => {
    try {
        const categories = await axios({
            method: "GET",
            url: `https://craveeats-server-a514484aed4c.herokuapp.com/food/categories`,
        });
        return dispatch({ type: GET_FOOD_CATEGORY_LIST, payload: categories.data });
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error });
    }
}

export const getFoodList = (menuId) => async (dispatch) => {
    try {
        const Menu = await axios({
            method: "GET",
            url: `https://craveeats-server-a514484aed4c.herokuapp.com/menu/list/${menuId}`,
        });
        return dispatch({ type: GET_FOOD_LIST, payload: Menu.data });
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error });
    }
};