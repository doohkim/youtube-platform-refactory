import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useOutletContext } from '../../../../node_modules/react-router/index';
import AnalysisChannelChartComponent from './AnalysisChannelChartComponent';
import AnalysisChannelPerformanceComponent from './AnalysisChannelPerformanceComponent';

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
