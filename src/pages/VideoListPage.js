import React from 'react';
import RankContentComponent from '../components/rank/common/RankContentComponent';
import FilterTableContainer from '../containers/common/FilterContainer';

const VideoListPage = () => {
    return (
        <div>
            <FilterTableContainer />
            <RankContentComponent />
        </div>
    );
};
export default VideoListPage;
