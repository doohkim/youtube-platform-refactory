import React from 'react';
import styled from 'styled-components';
import { postsStandards } from '../../utils/standards';
import PaginationComponent from '../common/PaginationComponent';
import SortComponent from '../rank/channel/SortComponent';
import PostListContentComponent from './PostListContentComponent';

const PostListBlock = styled.div`
    width: 1080px;
    margin: auto;
    .posts-menu-block {
        display: flex;
        justify-content: space-between;
        font-weight: 400;
        padding-top: 19px;
        .count {
            margin-left: 8px;
            width: 20%;
            margin-top: 2rem;
            font-size: 12px;
            color: #333;
            line-height: 18px;
        }
        .sort-menu-block {
            margin-right: 8px;
            width: 80%;
        }
    }
`;

const PostListComponent = ({
    sort,
    setSort,
    page,
    setPage,
    postList,
    postListError,
    loading,
}) => {
    if (postListError) {
        return <PostListComponent>Error</PostListComponent>;
    }
    return (
        <PostListBlock>
            {postList && <div className="posts-menu-block">
                <div className="count">{`총 ${postList.count}개`}</div>
                <div className="sort-menu-block">
                    <SortComponent
                        setSort={setSort}
                        sort={sort}
                        standards={postsStandards}
                    />
                </div>
            </div>}
            {!loading && postList && (
                <PostListContentComponent postList={postList} />
            )}
            {!loading && postList && (
                <PaginationComponent
                    dataList={postList}
                    setPage={setPage}
                    totalCount={postList.count}
                    page={page}
                    dataListError={postListError}
                    loading={loading}
                />
            )}
        </PostListBlock>
    );
};
export default PostListComponent;
