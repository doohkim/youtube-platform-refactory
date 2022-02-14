import React, { useCallback, useState } from 'react';
import styled, { css } from 'styled-components';
import palette from '../../../lib/styles/palette';

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
    font-size: 0.8rem;
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
const SortComponent = ({ setSort, standards }) => {
    const [standard, SetStandard] = useState(standards[0].name);
    const onSelect = useCallback((standard) => SetStandard(standard), []);
    return (
        <SortBlock>
            {standards.map((c, key) => (
                <Sort
                    onClickCapture={() => setSort(key + 1)}
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
