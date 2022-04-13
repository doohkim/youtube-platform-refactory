import React from 'react';
import styled from 'styled-components';
import { videoStandards } from '../../../utils/standards';
import PaginationComponent from '../../common/PaginationComponent';
import SortComponent from '../channel/SortComponent';
import VideoResultComponent from './VideoResultComponent';

const RankVideoContentBlock = styled.div`
    width: 1080px;
    margin: auto;

    .pagination-block {
        width: 100%;
        margin-top: 40px;
        text-align: center;
        padding-bottom: 40px;
    }
`;

const RankVideoContentComponent = ({
    dataList,
    dataListError,
    loading,
    setPage,
    setSort,
    sort,
    page,
}) => {
    return (
        <RankVideoContentBlock>
            <SortComponent
                setSort={setSort}
                sort={sort}
                standards={videoStandards}
            />
            {dataList && (
                <VideoResultComponent
                    dataList={dataList}
                    dataListError={dataListError}
                    loading={loading}
                />
            )}
            {dataList && (
                <PaginationComponent
                    dataList={dataList}
                    dataListError={dataListError}
                    totalCount={dataList.count}
                    loading={loading}
                    setPage={setPage}
                    page={page}
                />
            )}
        </RankVideoContentBlock>
    );
};
export default RankVideoContentComponent;
