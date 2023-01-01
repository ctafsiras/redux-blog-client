import { ADD_CONTENT, DELETE_CONTENT, GET_CONTENT, UPDATE_CONTENT } from "../actionTypes/actionTypes";

export const getContent = (data) => {
  return {
    type: GET_CONTENT,
    payload: data,
  };
};

export const addContent = (data) => {
  return {
    type: ADD_CONTENT,
    payload: data,
  };
};

export const deletePost = (id) => {
  return {
    type: DELETE_CONTENT,
    payload: id,
  };
};

export const updatePost = (post) => {
  return {
    type: UPDATE_CONTENT,
    payload: post,
  };
};
