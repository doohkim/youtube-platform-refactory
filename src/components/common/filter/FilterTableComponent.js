import React from 'react';
import styled from 'styled-components';
import Responsive from '../Responsive';
import FilterDivComponent from './FilterDivComponent';

const FilterTableBlock = styled(Responsive)`
    width: 100%;
    height: auto;
    padding: 0;

    div {
        letter-spacing: 2px;
        display: flex;
    }
    .category {
        width: 15%;
        font-size: 17px;
        padding: 0;
        background-color: #f5f5f5;
        border-right: 1px solid gray;
        border-bottom: 1px solid gray;
        font-weight: 500;

        justify-content: flex-start;
        align-items: center;
    }
    .type-box {
        flex: 1;
        border-bottom: 1px solid gray;
        flex-wrap: wrap;
        padding: 1rem;
        margin: 0 auto;
        font-size: 14px;
    }
`;

const FilterTableComponent = ({ category, onToggle }) => {
    const { text } = category;
    return (
        <FilterTableBlock>
            <div className="category">&nbsp;&nbsp;{text}</div>
            <div className="type-box">
                {category.types &&
                    category.types.map((type) =>
                        type.done ? (
                            <FilterDivComponent
                                key={type.id}
                                select
                                onClick={() => onToggle(text, type)}
                            >
                                &nbsp;{type.factory}&nbsp;
                            </FilterDivComponent>
                        ) : (
                            <FilterDivComponent
                                key={type.id}
                                onClick={() => onToggle(text, type)}
                            >
                                &nbsp;{type.factory}&nbsp;
                            </FilterDivComponent>
                        ),
                    )}
            </div>
        </FilterTableBlock>
    );
};
export default FilterTableComponent;
