import client from './client';

export const filterChannel = (filter_data, ) =>
    client.post(
        `/channels/list/?page=${filter_data.page}&sort=${filter_data.sort}/`,
        { filter_data },
    );
export const filterCategory = () => client.get('/channels/category/');

export const getChannelAnalysis = (channelId) => {
    return client.get(`/channels/detail/${channelId}/`);
};
