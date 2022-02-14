import React from 'react';
import FilterComponent from '../../components/common/FilterComponent';

const FilterTableContainer = ({ filterCategories, onToggle }) => {
    return (
        <FilterComponent
            filterCategories={filterCategories}
            onToggle={onToggle}
        />
    );
};
export default FilterTableContainer;
