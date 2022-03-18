import client from './client';

// export const getPosts = (filter_data) =>
//     client.get(`/channels/list/?channel&keyword=${keyword}`);

export const getPosts = () => client.get(`/posts/`);

export const readDetailPost = (postId) => {
    return client.get(`/posts/${postId}`);
};
