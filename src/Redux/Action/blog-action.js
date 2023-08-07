import * as types from "../types";
import axios from "axios";

export const fetchPost = () => {
  return async (dispatch) => {
    const apiKey = "AIzaSyDs4Zg2yH6BqMp3hUO7zP3AtuTshe4x0cU";
    const apiUrl =
      "https://www.googleapis.com/blogger/v3/blogs/9017420301734330187/posts?key=" +
      apiKey +
      "";
    await axios
      .get(apiUrl)
      .then((response) => {
        dispatch({
          type: types.GET_POST,
          payload: response.data.items,
        });
      })
      .catch((error) => {
        console.error("Error making GET request:", error);
      });
  };
};

export const selectedPost = (data) => {
  return async (dispatch) => {
    dispatch({
      type: types.SELECTED_POST,
      payload: data,
    });
  };
};
