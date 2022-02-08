import React from 'react';
import styled from 'styled-components';
import ResultComponent from '../channel/ResultComponent';
import SortComponent from '../channel/SortComponent';

const RankContentBlock = styled.div`
    width: 1080px;
    background-color: lightgray;
`;
const RankContentComponent = () => {
    return (
        <RankContentBlock>
            <SortComponent />
            <ResultComponent />
        </RankContentBlock>
    );
};
export default RankContentComponent;
