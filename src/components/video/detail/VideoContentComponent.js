import React from 'react';
import styled from 'styled-components';
import VideoInfoComponent from './VideoInfoComponent';
import VideoListComponent from './VideoListComponent';

const VideoContentBlock = styled.div`
    width: 1080px;
    /* background-color: lightblue; */
    height: auto;
    margin: auto;
    background-color: white;
    margin-top: 10px;
    margin-bottom: 10px;
`;

const VideoContentComponent = ({
    videoDetail,
    videoDetailError,
    loading,
    setPage,
    page,
}) => {
    return (
        <VideoContentBlock>
            {!loading && videoDetail && (
                <VideoInfoComponent
                    videoDetail={videoDetail}
                    videoDetailError={videoDetailError}
                />
            )}
            {!loading && videoDetail && (
                <VideoListComponent
                    setPage={setPage}
                    page={page}
                    videoDetail={videoDetail}
                    videoDetailError={videoDetailError}
                    loading={loading}
                />
            )}
        </VideoContentBlock>
    );
};
export default VideoContentComponent;
