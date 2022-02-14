import client from './client';
export const filterVideo = (filter_data) =>
    client.post(
        `/channels/video/?page=${filter_data.page}&sort=${filter_data.sort}/`,
        {
            filter_data,
        },
    );

export const getVideoAnalysis = (videoId) => {
    return client.get(`/channels/video/${videoId}/`);
};
