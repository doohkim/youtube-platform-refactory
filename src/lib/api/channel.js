import client from './client';

export const filterChannel = (filter_data, page = 1, sort = 1) =>
    client.post(`/channel/list/?page=${page}&sort=${sort}`, { filter_data });

export const filterCategory = () => client.get('/channels/category/');
