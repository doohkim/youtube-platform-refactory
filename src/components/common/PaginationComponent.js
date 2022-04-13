import React from 'react';
import Pagination from 'react-js-pagination';
import styled from 'styled-components';
import '../rank/common/PaginationComponent.css';

const PaginationBlock = styled.div`
    width: 100%;
    margin-top: 40px;
    text-align: center;
    /* background: lightgray; */
    padding-bottom: 40px;
`;
const PaginationComponent = ({
    dataList,
    dataListError,
    loading,
    totalCount,
    setPage,
    page,
}) => {
    if (dataListError) {
        return <div>에러가 발생했습니다.</div>;
    }
    if (loading || !dataList) {
        return null;
    }

    return (
        <PaginationBlock>
            <Pagination
                activePage={page}
                itemsCountPerPage={20}
                totalItemsCount={totalCount}
                pageRangeDisplayed={5}
                onChange={setPage}
                hideDisabled
            />
        </PaginationBlock>
    );
};
export default PaginationComponent;
