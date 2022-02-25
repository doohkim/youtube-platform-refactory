import client from './client';

// export const getPosts = (filter_data) =>
//     client.get(`/channels/list/?channel&keyword=${keyword}`);

export const getPosts = (params) =>
    client.get(`/posts/?page=${params.page}&sort=${params.sort}/`);


export const readDetailPost = (postId) => {
    return client.get(`/posts/${postId}/`);
};