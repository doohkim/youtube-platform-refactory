import React from 'react';
import styled from 'styled-components';
import FilterTableComponent from './filter/FilterTableComponent';

const FilterBlock = styled.div`
    width: 100%;
    border: 1px solid darkgray;
`;
const FilterComponent = () => {
    return (
        <FilterBlock>
            <FilterTableComponent />
            <FilterTableComponent />
            <FilterTableComponent />
            <FilterTableComponent />
            <FilterTableComponent />
            <FilterTableComponent />
        </FilterBlock>
    );
};
export default FilterComponent;
