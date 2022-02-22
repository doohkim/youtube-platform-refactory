import React from 'react'
import styled from 'styled-components';
import PostListComponent from '../../components/posts/PostListComponent';
import { postListData } from '../../utils/postData';

const PostListBlock = styled.div`
    width: 1080px;
    margin: auto;

    .title {
        width: 100%;
        h3{
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
    return(
        <PostListBlock>
            <div className="title">
                <h3>베스트</h3>
            </div>
            <PostListComponent postList={postListData}/>
        </PostListBlock>
    )
}
export default PostListContainer