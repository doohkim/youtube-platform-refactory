import React from 'react';
import styled from 'styled-components';
import PostItemComponent from './PostItemComponent';

const PostListContentBlock = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
`;

const PostListContentComponent = () => {
    return (
        <PostListContentBlock>
            <PostItemComponent />
            <PostItemComponent />
            <PostItemComponent />
            <PostItemComponent />
            <PostItemComponent />
            <PostItemComponent />
        </PostListContentBlock>
    );
};
export default PostListContentComponent;
