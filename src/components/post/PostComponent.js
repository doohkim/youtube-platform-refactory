import React from 'react';
import styled from 'styled-components';

import PostSectionViewComponent from './PostSectionViewComponent';

const PostBlock = styled.div`
    /* background-color: aliceblue; */
    width: 1080px;
    margin: auto;
`;

const PostComponent = ({ postDetail, postDetailError, loading }) => {
    return (
        <PostBlock>
            
            {!loading && postDetail && (
                <PostSectionViewComponent
                    postDetail={postDetail}
                    postDetailError={postDetailError}
                />
            )}
            
        </PostBlock>
    );
};
export default PostComponent;
