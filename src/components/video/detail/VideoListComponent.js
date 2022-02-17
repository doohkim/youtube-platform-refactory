import React from 'react';
import styled from 'styled-components';
import PaginationComponent from '../../common/PaginationComponent';
import ResultComponent from '../../rank/video/ResultComponent';

const VideoListBlock = styled.div`
    width: 1080px;
    margin: auto;

    .pagination-block {
        width: 100%;
        margin-top: 40px;
        text-align: center;
        padding-bottom: 40px;
    }
`;

const VideoListComponent = ({
    videoDetail,
    videoDetailError,
    loading,
    setPage,
    page,
}) => {
    return (
        <VideoListBlock>
            {videoDetail && (
                <ResultComponent
                    videoDetail={videoDetail}
                    videoDetailError={videoDetailError}
                    loading={loading}
                />
            )}
            {videoDetail && (
                <PaginationComponent
                    videoDetail={videoDetail}
                    videoDetailError={videoDetailError}
                    loading={loading}
                    setPage={setPage}
                    page={page}
                />
            )}
        </VideoListBlock>
    );
};
export default VideoListComponent;
