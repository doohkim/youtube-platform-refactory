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
    videoReadLoading,
    setPage,
    page,
}) => {
    
    return (
        <VideoContentBlock>
            {!videoReadLoading && videoDetail && (
                <VideoInfoComponent
                    videoDetail={videoDetail}
                    videoDetailError={videoDetailError}
                    loading={videoReadLoading}
                />
            )}
            {!videoReadLoading && videoDetail && (
                <VideoListComponent
                    setPage={setPage}
                    page={page}
                    videoDetail={videoDetail}
                    videoDetailError={videoDetailError}
                    loading={videoReadLoading}
                />
            )}
        </VideoContentBlock>
    );
};
export default VideoContentComponent;
