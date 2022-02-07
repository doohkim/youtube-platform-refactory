import React from 'react';
import styled from 'styled-components';
import FilterTableComponent from './filter/FilterTableComponent';

const FilterBlock = styled.div`
    width: 100%;
    border: 1px solid darkgray;
`;

const FilterComponent = ({ filter_factories, onToggle }) => {
    return (
        <FilterBlock>
            {filter_factories &&
                filter_factories.map((factory, key) => (
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
