import client from './client';

// export const getPosts = (filter_data) =>
//     client.get(`/channels/list/?channel&keyword=${keyword}`);

export const getPosts = (params) =>
    client.get(`/posts/?page=${params.page}&sort=${params.sort}/`);


export const readPost = (videoId) => {
    return client.get(`/posts/${videoId}/`);
};