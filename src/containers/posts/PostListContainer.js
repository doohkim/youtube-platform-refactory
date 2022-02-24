import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import PostListComponent from '../../components/posts/PostListComponent';
import { getListPost, unloadPost } from '../../modules/posts';
import { postListData } from '../../utils/postData';

const PostListBlock = styled.div`
    width: 1080px;
    margin: auto;

    .title {
        width: 100%;
        h3 {
            padding-top: 23px;
            font-weight: 700;
            font-size: 28px;
            color: #333;
            line-height: 35px;
            letter-spacing: -1px;
            text-align: center;
        }
    }
`;

const PostListContainer = () => {
    const [page, setPage] = useState(1);
    const [sort, setSort] = useState(1);

    const dispatch = useDispatch();
    const { postList, postListError, postListLoading } = useSelector(
        ({ post, loading }) => ({
            postList: post.postList,
            postListError: post.postListError,
            postListLoading: loading['posts/GET_POST_LIST'],
        }),
    );

    useEffect(() => {
        dispatch(unloadPost());
    }, [dispatch]);

    useEffect(() => {
        dispatch(getListPost(page, sort));
    }, [dispatch, page, sort]);
    return (
        <PostListBlock>
            <div className="title">
                <h3>베스트</h3>
            </div>
            <PostListComponent
                postList={postList}
                postListError={postListError}
                loading={postListLoading}
                sort={sort}
                setSort={setSort}
                page={page}
                setPage={setPage}
            />
        </PostListBlock>
    );
};
export default PostListContainer;
