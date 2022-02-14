import React from 'react';
import styled from 'styled-components';
import ResultComponent from '../channel/ResultComponent';
import SortComponent from '../channel/SortComponent';
import PaginationComponent from '../../common/PaginationComponent';
import { channelStandards } from '../../../utils/standards';

const RankChannelContentBlock = styled.div`
    width: 1080px;
    .pagination-block {
        width: 100%;
        margin-top: 40px;
        text-align: center;
        padding-bottom: 40px;
    }
`;

const RankChannelContentComponent = ({
    dataList,
    dataListError,
    loading,
    setPage,
    setSort,
    sort,
    page,
}) => {
    return (
        <RankChannelContentBlock>
            <SortComponent
                setSort={setSort}
                sort={sort}
                standards={channelStandards}
            />
            {dataList && (
                <ResultComponent
                    dataList={dataList}
                    dataListError={dataListError}
                    loading={loading}
                />
            )}
            {dataList && (
                <PaginationComponent
                    dataList={dataList}
                    dataListError={dataListError}
                    loading={loading}
                    setPage={setPage}
                    page={page}
                />
            )}
        </RankChannelContentBlock>
    );
};
export default RankChannelContentComponent;
