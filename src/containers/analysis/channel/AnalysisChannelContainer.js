import React from 'react';
import styled from 'styled-components';
import { useOutletContext } from 'react-router-dom';
import AnalysisChannelChartComponent from '../../../components/analysis/channel/AnalysisChannelChartComponent';
import AnalysisChannelPerformanceComponent from '../../../components/analysis/channel/AnalysisChannelPerformanceComponent';

const AnalysisChannelBlock = styled.div`
    width: 1080px;
    margin: auto;
    margin-top: 10px;
`;

const AnalysisChannelContainer = () => {
    const [channelDetail, channelDetailError, isLoading] = useOutletContext();
    // console.log(useParams())
    return (
        <AnalysisChannelBlock>
            {!isLoading && channelDetail && (
                <AnalysisChannelPerformanceComponent
                    channelDetail={channelDetail}
                    channelDetailError={channelDetailError}
                />
            )}
            {!isLoading && channelDetail && (
                <AnalysisChannelChartComponent
                    channelDetail={channelDetail}
                    channelDetailError={channelDetailError}
                />
            )}
        </AnalysisChannelBlock>
    );
};

export default AnalysisChannelContainer;
