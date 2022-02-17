import React, { useCallback, useState } from 'react';
import { Outlet } from 'react-router-dom';
import AnalysisMenuComponent from '../../components/analysis/AnalysisMenuComponent';
import AnalysisProfileComponent from '../../components/analysis/AnalysisProfileComponent';

const AnalaysisContainer = () => {
    const [subCategory, setSubCategory] = useState('');
    const onSubSelect = useCallback((subCategory) => setSubCategory(subCategory),[subCategory]);

    return (
        <>
            <AnalysisProfileComponent />
            <AnalysisMenuComponent
                subCategory={subCategory}
                onSubSelect={onSubSelect}
            />
            <Outlet />
        </>
    );
};
export default AnalaysisContainer;
