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
    channelList,
    channelListError,
    channelLoading,
    setPage,
    page,
}) => {
    if (channelListError) {
        return <div>에러가 발생했습니다.</div>;
    }
    if (channelLoading || !channelList) {
        return null;
    }
    console.log('channel length', channelList.results.length);
    console.log('page', page);
    return (
        <PaginationBlock>
            <Pagination
                activePage={page}
                itemsCountPerPage={5}
                totalItemsCount={channelList.count}
                pageRangeDisplayed={5}
                onChange={setPage}
                hideDisabled
            />
        </PaginationBlock>
    );
};
export default PaginationComponent;
