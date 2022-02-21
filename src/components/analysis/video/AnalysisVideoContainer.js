import React, { useState } from 'react';
import styled from 'styled-components';
import { useOutletContext } from 'react-router-dom';
import AnalysisVideoInfoComponent from './AnalysisVideoInfoComponent';
import AnalysisVideoChartComponent from './AnalysisVideoChartComponent';
import VideoListComponent from '../../video/detail/VideoListComponent';

const AnalysisVideoBlock = styled.div`
    width: 1080px;
    margin: auto;
    margin-top: 10px;
`;

const AnalysisVideoContainer = () => {
    const [page, setPage] = useState(1);
    const [sort, setSort] = useState(1);
    const [channelDetail, channelDetailError, isLoading] = useOutletContext();

    return (
        <AnalysisVideoBlock>
            {!isLoading && channelDetail && (
                <AnalysisVideoInfoComponent
                    channelDetail={channelDetail}
                    channelDetailError={channelDetailError}
                />
            )}
            {!isLoading && channelDetail && (
                <AnalysisVideoChartComponent
                    channelDetail={channelDetail}
                    channelDetailError={channelDetailError}
                />
            )}
            {/* {!isLoading && channelDetail && (
                <VideoListComponent
                    setPage={setPage}
                    page={page}
                    loading={isLoading}
                    videoDetail={channelDetail.videos}
                    videoDetailError={channelDetailError}
                />
            )} */}
        </AnalysisVideoBlock>
    );
};

export default AnalysisVideoContainer;
