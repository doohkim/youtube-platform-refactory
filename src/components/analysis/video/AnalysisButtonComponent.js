import React from 'react';
import styled, { css } from 'styled-components';
import palette from '../../../lib/styles/palette';

const buttonStyle = css`
    border: none;
    width: 70px;
    border-radius: 3px;
    color: #999;
    border: 0;
    width: 70px;
    font-size: 12px;
    float: right;
    padding: 8px 0;
    background-color: transparent;
    cursor: pointer;

    /* display: inline-block; */
    font-weight: 500;
    border: 1px solid #e5e5e5;
   
    &:hover {
        color: ${palette.cyan[5]};
    }

   
    ${(props) => 
    props.selected && 
    css`
        color: ${palette.cyan[5]};
        border: 1px solid ${palette.cyan[5]}
        
    `}
`;

const StyledButton = styled.button`
    ${buttonStyle}
`;


const AnalysisButtonComponent = (props) => {
    return <StyledButton selected={props.selected? 1 : 0} >{props.text}</StyledButton>
}

export default AnalysisButtonComponent