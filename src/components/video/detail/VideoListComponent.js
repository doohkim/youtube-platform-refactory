import React from 'react';
import styled from 'styled-components';
import PaginationComponent from '../../common/PaginationComponent';
import VideoDetailResultComponent from './VideoDetailResultComponent'
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
            <VideoDetailResultComponent
                dataList={videoDetail}
                dataListError={videoDetailError}
                loading={loading}
            />
            
            <PaginationComponent
                dataList={videoDetail}
                dataListError={videoDetailError}
                setPage={setPage}
                totalCount={videoDetail.channel.videos.length}
                page={page}
            />
        </VideoListBlock>
    );
};
export default VideoListComponent;
