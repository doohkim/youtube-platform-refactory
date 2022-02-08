import React from 'react';
import styled from 'styled-components';

const ChannelItemBlock = styled.div`
    display: flex;
    flex-direction: row;
`;
const ChannelItemComponent = () => {
    return (
        <ChannelItemBlock>
            <div className="channel-rank">1</div>

            <div className="channel-subscriber">734만</div>
        </ChannelItemBlock>
    );
};

export default ChannelItemComponent;
