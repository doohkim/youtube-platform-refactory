import React from 'react';
import styled from 'styled-components';
import PostItemComponent from './PostItemComponent';
const PostListContentBlock = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
`;

const PostListContentComponent = ({postList}) => {
    return (
        <PostListContentBlock>
            {postList && postList.results.map((post, key) => (
                <PostItemComponent key={key} index={post.id} post={post} />
            ))}
        </PostListContentBlock>
    );
};
export default PostListContentComponent;
