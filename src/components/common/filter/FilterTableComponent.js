import React from 'react';
import styled from 'styled-components';
import Responsive from '../Responsive';

const FilterTableBlock = styled(Responsive)`
    width: 100%;
    height: auto;
    border: 1px solid red;
    div {
        letter-spacing: 2px;
    }
    .category {
        width: 15%;
        font-size: 1.2rem;
        padding: 0;
        background-color: lightgray;
        font-weight: bold;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
    .type-box {
        flex: 1;
        display: flex;
        flex-wrap: wrap;
        padding: 1rem;
        margin: 0 auto;
        /* background: lightsalmon; */
        .type {
            width: 10%;
            cursor: pointer;
            height: 40px;
            justify-content: center;
            align-items: center;
            display: flex;
            /* background: lightseagreen; */
            margin-right: 10px;
            margin-top: 10px;
            border-radius: 10px;
            &:hover {
                background-color: lightseagreen;
            }
        }
    }
`;
const FilterTableComponent = () => {
    return (
        <FilterTableBlock>
            <div className="category">국가</div>
            <div className="type-box">
                <div className="type">dd</div>
                <div className="type">dd</div>
                <div className="type">dd</div>
                <div className="type">dd</div>
                <div className="type">dd</div>
                <div className="type">dd</div>
                <div className="type">dd</div>
                <div className="type">dd</div>
                <div className="type">dd</div>
                <div className="type">dd</div>
            </div>
        </FilterTableBlock>
    );
};
export default FilterTableComponent;
