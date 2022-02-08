import React, { useCallback, useState } from 'react';
import styled, { css } from 'styled-components';
import palette from '../../../lib/styles/palette';
const standards = [
    {
        name: 'subscriber',
        text: '구독자순',
    },
    {
        name: 'dailyViews',
        text: '일일조회수 순',
    },
    {
        name: 'subscriberSoaring',
        text: '구독자 급상승 순',
    },
    {
        name: 'videoAverageViews',
        text: '영상 평균 조회수 순',
    },
];
const SortBlock = styled.div`
    width: 100%;
    margin-top: 2rem;
    height: 30px;
    display: flex;
    justify-content: flex-end;
    @media screen and (max-width: 768px) {
        width: 100%;
        overflow-x: auto;
    }
`;

const Sort = styled.div`
    cursor: pointer;
    font-size: 0.9rem;
    white-space: pre;
    text-decoration: none;
    letter-spacing: 1px;
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
const SortComponent = () => {
    const [standard, SetStandard] = useState('subscriber');
    const onSelect = useCallback((standard) => SetStandard(standard), []);
    return (
        <SortBlock>
            {standards.map((c) => (
                <Sort
                    key={c.name}
                    active={standard === c.name}
                    onClick={() => onSelect(c.name)}
                >
                    {c.text}
                </Sort>
            ))}
        </SortBlock>
    );
};

export default SortComponent;
