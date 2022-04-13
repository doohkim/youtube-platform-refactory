import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { useParams } from 'react-router-dom';
import palette from '../../lib/styles/palette';

const subCategories = [
    {
        name: '',
        text: '채널분석',
    },
    {
        name: 'video',
        text: '영상분석',
    },
    {
        name: 'client',
        text: '시청자분석',
    },
    {
        name: 'advertise',
        text: '광고단가',
    },
];
const AnalysisMenuBlock = styled.div`
    width: 1080px;
    padding-top:1rem;
    margin: auto;
    display: flex;
`;

const Category = styled.div`
    font-size: 1rem;
    cursor: pointer;
    white-space: pre;
    text-decoration: none;
    letter-spacing: 1px;
    font-weight: 500;
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
            border-bottom: 3px solid ${palette.cyan[5]};
            font-weight: 600;
            color: ${palette.cyan[5]};
            &:hover {
                color: ${palette.cyan[5]};
            }
        `}
`;
const AnalysisMenuComponent = ({ subCategory, onSubSelect }) => {
    // const parmas = useParams()
    // for(var key in parmas) {
    //     console.log(key + " : " +parmas[key]);
    //     console.log(params.keys())
    //  }
    // const {pathname, channelId } = Object.values(useParams())
    const params = Object.values(useParams());
    const channelId = params[0];
    const type = params[1];
    return (
        <AnalysisMenuBlock>
            {subCategories.map((c) => (
                <Category
                    key={c.name}
                    active={type === c.name}
                    onClick={() => onSubSelect(c.name)}
                >
                    <Link to={`/analysis/${channelId}/${c.name}`}>
                        {c.text}
                    </Link>
                </Category>
            ))}
        </AnalysisMenuBlock>
    );
};
export default AnalysisMenuComponent;
