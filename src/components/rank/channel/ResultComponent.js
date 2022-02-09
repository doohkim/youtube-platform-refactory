import React from 'react';
import styled from 'styled-components';
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
const ResultComponent = ({ channelList, channelListError, channelLoading }) => {
    if (channelListError) {
        return (
            <ChannelListErrorBlock>에러가 발생했습니다.</ChannelListErrorBlock>
        );
    }
    return (
        <ResultBlock>
            {!channelLoading &&
                channelList &&
                channelList.map((channel, index) => (
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
