import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FilterComponent from '../../components/common/FilterComponent';
import { getCategory, toggle } from '../../modules/category';

const FilterTableContainer = ({ filterCategories, onToggle }) => {
    return (
        <FilterComponent
            filterCategories={filterCategories}
            onToggle={onToggle}
        />
    );
};
export default FilterTableContainer;
