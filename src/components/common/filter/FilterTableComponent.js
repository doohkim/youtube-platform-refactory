import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import Responsive from '../Responsive';
import FilterDivComponent from './FilterDivComponent';

const FilterTableBlock = styled(Responsive)`
    width: 100%;
    height: auto;
    border: 1px solid red;
    padding: 0;

    div {
        letter-spacing: 2px;
        display: flex;
    }
    .category {
        width: 15%;
        font-size: 1.2rem;
        padding: 0;
        background-color: lightgray;
        font-weight: bold;

        justify-content: flex-start;
        align-items: center;
    }
    .type-box {
        flex: 1;
        flex-wrap: wrap;
        padding: 1rem;
        margin: 0 auto;
    }
`;

const FilterTableComponent = ({ category, onToggle }) => {
    const { text } = category;
    return (
        <FilterTableBlock>
            <div className="category">{text}</div>
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
