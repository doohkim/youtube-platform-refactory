import React from 'react';
import styled from 'styled-components';
import ChannelItemComponent from './ChannelItemComponent';

const ResultBlock = styled.div`
    width: 100%;
    background-color: lightskyblue;
    height: 100px;
    border-top: 2px solid black;
`;
const ResultComponent = () => {
    return (
        <ResultBlock>
            <ChannelItemComponent />
            <ChannelItemComponent />
            <ChannelItemComponent />
            <ChannelItemComponent />
        </ResultBlock>
    );
};
export default ResultComponent;
