import client from './client';

export const searchChannel = (keyword) =>
    client.get(`/channels/list/?channel&keyword=${keyword}`);
