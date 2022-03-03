import React from 'react';
import styled from 'styled-components';

import PostSectionViewComponent from './PostSectionViewComponent';
import PostViewInfomationComponent from './PostViewInfomationComponent';

const PostBlock = styled.div`
    /* background-color: aliceblue; */
    width: 1080px;
    margin: auto;
`;

const PostComponent = ({
    postDetail,
    postDetailError,
    loading,
    selectProducts,
    input,
    onInsert,
    onChangeInput,
    onRemove,
    onDecrease,
    onIncrease,
    onClick
}) => {
    return (
        <PostBlock>
            {!loading && postDetail && (
                <PostSectionViewComponent
                    postDetail={postDetail}
                    postDetailError={postDetailError}
                    selectProducts={selectProducts}
                    input={input}
                    onInsert={onInsert}
                    onChangeInput={onChangeInput}
                    onRemove={onRemove}
                    onDecrease={onDecrease}
                    onIncrease={onIncrease}
                    onClick={onClick}
                />
            )}
            {!loading && postDetail && (
                <PostViewInfomationComponent
                    postDetail={postDetail}
                    postDetailError={postDetailError}
                />
            )}
        </PostBlock>
    );
};
export default PostComponent;
