import React from 'react';
import styled from 'styled-components';
import '../rank/common/PaginationComponent.css';
import Pagination from 'react-js-pagination';

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
    console.log(channelList.length);
    return (
        <PaginationBlock>
            <Pagination
                activePage={page}
                totalItemsCount={channelList.length}
                itemsCountPerPage={10}
                pageRangeDisplayed={5}
                prevPageText={'<'}
                nextPageText={'>'}
                onChange={setPage}
            />
        </PaginationBlock>
    );
};
export default PaginationComponent;
