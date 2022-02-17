import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import RankChannelContentComponent from '../../../components/rank/common/RankChannelContentComponent';
import { toggle, unloadCategory } from '../../../modules/category';
import { getListChannels, unloadChannel } from '../../../modules/channel';
import FilterTableContainer from '../../common/FilterContainer';

const ChannelContainerBlock = styled.div`
    width: 1080px;
    margin:auto;

`;

const ChannelContainer = () => {
    const [page, setPage] = useState(1);
    const [sort, setSort] = useState(1);

    const dispatch = useDispatch();
    const {
        channelList,
        channelListError,
        channelLoading,
        filterCategories,
        filterCategoriesError,
    } = useSelector(({ channel, category, loading }) => ({
        channelList: channel.channelList,
        channelListError: channel.channelListError,
        channelLoading: loading['channel/GET_CHANNEL_LIST'],
        filterCategories: category.filterCategories,
        filterCategoriesError: category.filterCategoriesError,
    }));
    const onToggle = (text, factory) => {
        dispatch(toggle(text, factory));
    };

    useEffect(() => {
        dispatch(unloadCategory());
        dispatch(unloadChannel());
    }, [dispatch]);

    useEffect(() => {
        // dispatch(getCategory());
        // console.log(page, sort);
        if (filterCategories) {
            dispatch(getListChannels(filterCategories, page, sort));
        }
    }, [dispatch, filterCategories, page, sort]);

    return (
        <ChannelContainerBlock>
            <FilterTableContainer
                filterCategories={filterCategories}
                filterCategoriesError={filterCategoriesError}
                onToggle={onToggle}
            />
            <RankChannelContentComponent
                setSort={setSort}
                sort={sort}
                setPage={setPage}
                page={page}
                dataList={channelList}
                dataListError={channelListError}
                loading={channelLoading}
            />
        </ChannelContainerBlock>
    );
};

export default ChannelContainer;
