import React from 'react';
import styled from 'styled-components';
import ResultComponent from '../channel/ResultComponent';
import SortComponent from '../channel/SortComponent';
import PaginationComponent from '../../common/PaginationComponent';

const RankContentBlock = styled.div`
    width: 1080px;
    .pagination-block {
        width: 100%;
        margin-top: 40px;
        text-align: center;
        padding-bottom: 40px;
    }
`;

const RankContentComponent = ({
    channelList,
    channelListError,
    channelLoading,
    setPage,
    setSort,
    sort,
    page,
}) => {
    return (
        <RankContentBlock>
            <SortComponent setSort={setSort} sort={sort} />
            {channelList && (
                <ResultComponent
                    channelList={channelList}
                    channelListError={channelListError}
                    channelLoading={channelLoading}
                />
            )}
            {channelList && (
                <PaginationComponent
                    channelList={channelList}
                    channelListError={channelListError}
                    channelLoading={channelLoading}
                    setPage={setPage}
                    page={page}
                />
            )}
        </RankContentBlock>
    );
};
export default RankContentComponent;
