import { ADD_BLOG } from '../actionTypes';

export const addBlog = (blog) => ({
    type: ADD_BLOG,
    payload: blog
});