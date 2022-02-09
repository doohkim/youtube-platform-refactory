import client from './client';

export const filterChannel = (filter_data, page = 1, sort = 1) =>
    client.post(`/channels/list/?page=${page}&sort=${sort}`, { filter_data });

export const filterCategory = () => client.get('/channels/category/');

export const getChannelAnalysis = (channelId) => {
    return client.get(`/channels/detail/${channelId}/`);
};
