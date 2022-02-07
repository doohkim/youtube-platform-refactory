import React from 'react';
import styled, { css } from 'styled-components';

const divStyle = css`
    display: flex;
    align-items: center;
    height: 30px;
    border: none;
    border-radius: 10px;
    cursor: pointer;

    &:hover {
        background-color: lightblue;
    }

    & + & {
        margin-right: 10px;
        margin-bottom: 0.5rem;
    }
    ${(props) =>
        props.select &&
        css`
            background-color: lightblue;
        `}
`;

const StyledDiv = styled.div`
    ${divStyle}
`;

const FilterDivComponent = (props) => {
    return <StyledDiv {...props} select={props.select ? 1 : 0} />;
};
export default FilterDivComponent;
