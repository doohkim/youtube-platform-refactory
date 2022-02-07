import client from './client';

// 로그인
export const filterChannel = (filter_data, page = 1, sort = 1) =>
    client.post(`/channel/list/?page=${page}&sort=${sort}`, { filter_data });
