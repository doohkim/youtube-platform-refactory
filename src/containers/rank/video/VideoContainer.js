import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RankVideoContentComponent from '../../../components/rank/video/RankVideoContentComponent';
import { toggle, unloadCategory } from '../../../modules/category';
import { getListVideos, unloadVideo } from '../../../modules/video';
import FilterTableContainer from '../../common/FilterContainer';

const VideoContainer = () => {
    const [page, setPage] = useState(1);
    const [sort, setSort] = useState(1);

    const dispatch = useDispatch();
    const {
        videoList,
        videoListError,
        videoLoading,
        filterCategories,
        filterCategoriesError,
    } = useSelector(({ video, category, loading }) => ({
        videoList: video.videoList,
        videoListError: video.videoListError,
        videoLoading: loading['video/GET_VIDEO_LIST'],
        filterCategories: category.filterCategories,
        filterCategoriesError: category.filterCategoriesError,
    }));

    const onToggle = (text, factory) => {
        dispatch(toggle(text, factory));
    };

    useEffect(() => {
        dispatch(unloadCategory());
        dispatch(unloadVideo());
    }, [dispatch]);

    useEffect(() => {
        if (filterCategories) {
            dispatch(getListVideos(filterCategories, page, sort));
        }
    }, [dispatch, filterCategories, page, sort]);

    return (
        <div>
            <FilterTableContainer
                filterCategories={filterCategories}
                filterCategoriesError={filterCategoriesError}
                onToggle={onToggle}
            />
            <RankVideoContentComponent
                setSort={setSort}
                sort={sort}
                setPage={setPage}
                page={page}
                dataList={videoList}
                dataListError={videoListError}
                loading={videoLoading}
            />
        </div>
    );
};

export default VideoContainer;
