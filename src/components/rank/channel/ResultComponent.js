import React from 'react';
import styled from 'styled-components';
import { useNavigate } from '../../../../node_modules/react-router/index';
import ChannelItemComponent from './ChannelItemComponent';

const ResultBlock = styled.div`
    width: 100%;
    /* background-color: lightskyblue; */
    border-top: 1px solid black;
`;
const ChannelListErrorBlock = styled.div`
    width: 1080px;
    background: gray;
`;
const ResultComponent = ({ dataList, dataListError, loading }) => {
    const navigate = useNavigate();
    if (dataListError) {
        navigate('/');
        return (
            <ChannelListErrorBlock>에러가 발생했습니다.</ChannelListErrorBlock>
        );
    }
    return (
        <ResultBlock>
            {!loading &&
                dataList &&
                dataList.results.map((channel, index) => (
                    <ChannelItemComponent
                        key={channel.pk}
                        index={index}
                        channelInfo={channel}
                    />
                ))}
        </ResultBlock>
    );
};
export default ResultComponent;
