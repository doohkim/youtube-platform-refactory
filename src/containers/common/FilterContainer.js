import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FilterComponent from '../../components/common/FilterComponent';
import { toggle } from '../../modules/category';

const FilterTableContainer = () => {
    const { filter_factories } = useSelector(({ category }) => ({
        filter_factories: category.filter_categories,
    }));
    const dispatch = useDispatch();
    const onToggle = (text, factory) => {
        dispatch(toggle(text, factory));
    };

    return (
        <FilterComponent
            filter_factories={filter_factories}
            onToggle={onToggle}
        />
    );
};
export default FilterTableContainer;
