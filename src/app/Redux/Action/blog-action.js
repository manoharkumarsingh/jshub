import * as types from "../types";
import axios from "axios";
const apiKey = "AIzaSyDs4Zg2yH6BqMp3hUO7zP3AtuTshe4x0cU";
export const fetchPost = () => {
  return async (dispatch) => {
    const apiUrl = await axios.get(
      "https://www.googleapis.com/blogger/v3/blogs/9017420301734330187/posts?maxResults=500&key=" +
        apiKey +
        ""
    );
    Promise.all([apiUrl])
      .then((response) => {
        dispatch({
          type: types.GET_POST,
          payload: response[0].data.items,
        });
      })
      .catch((error) => {
        console.error("Error making GET request:", error);
      });
  };
};

//796757796954-dgudvaiphfo66t8qcqoh3i7pn886r799.apps.googleusercontent.com
//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

export const createPost = () => {
  return async (dispatch) => {
    const apiUrl =
      "https://www.googleapis.com/blogger/v3/blogs/9017420301734330187/posts?key=" +
      apiKey +
      ""; // Replace with your API endpoint
    const formData = {
      kind: "blogger#post",
      blog: {
        id: "9017420301734330187",
      },
      title: "A new post",
      content: "With <b>exciting</b> content...",
    };

    const config = {
      headers: {
        Authorization: "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", // Replace with your actual authorization token
        "Content-Type": "application/json",
      },
    };

    const api = await axios.post(apiUrl, formData, config);
    Promise.all([api])
      .then((response) => {
        dispatch({
          type: types.GET_POST,
          payload: response[0].data.items,
        });
      })
      .catch((error) => {
        console.error("Error making GET request:", error);
      });
  };
};
