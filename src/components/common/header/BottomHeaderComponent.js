import React from 'react';
import styled, { css } from 'styled-components';
import palette from '../../../lib/styles/palette';
import { Link } from 'react-router-dom';
const categories = [
    {
        name: '',
        text: '채널순위',
    },
    {
        name: 'video',
        text: '영상순위',
    },
    {
        name: 'market',
        text: '마켓',
    },
    {
        name: 'service',
        text: '고객센터',
    },
];
const BottomHeaderBlock = styled.div`
    width: 100%;
    height: 50px;
    /* border: 1px solid lightgray; */
    display: flex;
    padding: 1rem;
    margin: 0 auto;
    @media screen and (max-width: 768px) {
        width: 100%;
        overflow-x: auto;
    }
`;
const Category = styled.div`
    font-size: 1.125rem;
    cursor: pointer;
    white-space: pre;
    text-decoration: none;
    letter-spacing: 1px;
    font-weight: bold;
    color: inherit;
    padding-bottom: 0.6rem;

    &:hover {
        color: ${palette.cyan[5]};
    }

    & + & {
        margin-left: 2rem;
    }

    ${(props) =>
        props.active &&
        css`
            font-weight: 600;
            color: ${palette.cyan[5]};
            &:hover {
                color: ${palette.cyan[5]};
            }
        `}
`;

const BottomHeaderComponent = ({ onSelect, category }) => {
    return (
        <BottomHeaderBlock>
            {categories.map((c) => (
                <Category
                    key={c.name}
                    active={category === c.name}
                    onClick={() => onSelect(c.name)}
                >
                    <Link to={'/' + c.name}>{c.text}</Link>
                </Category>
            ))}
        </BottomHeaderBlock>
    );
};
export default BottomHeaderComponent;
