import React from 'react';
import styled from 'styled-components';
import FilterTableComponent from './filter/FilterTableComponent';

const FilterBlock = styled.div`
    width: 100%;
    border-top: 1px solid darkgray;
    border-left: 1px solid darkgray;
    border-right: 1px solid darkgray;
`;

const FilterComponent = ({ filterCategories, onToggle }) => {
    return (
        <FilterBlock>
            {filterCategories &&
                filterCategories.map((factory, key) => (
                    <FilterTableComponent
                        key={key}
                        category={factory}
                        onToggle={onToggle}
                    />
                ))}
        </FilterBlock>
    );
};
export default FilterComponent;
