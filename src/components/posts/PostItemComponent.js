import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const PostItemBlock = styled.div`
    width: 344px;
    height: 682px;
    /* margin: 1rem; */
    /* padding: 25px 18px 0 0; */
    margin: 25px 8px 0 8px;
    .item {
        .thumbnail-block {
            display: block;
            width: 100%;
            height: 435px;
            /* background-color: #f9f8f9; */
            img {
                width: 330px;
                height: 100%;
            }
        }
        .post-info-block {
            padding: 14px 10px 10px 0;
            display: block;
            background-color: white;
            .post-title {
                overflow: hidden;
                max-height: 58px;
                font-weight: 400;
                font-size: 20px;
                color: #333;
                line-height: 29px;
                word-wrap: break-word;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
            }
            .post-cost {
                display: block;
                padding-top: 7px;
                font-size: 18px;
                line-height: 29px;
                .post-price {
                    font-weight: 800;
                    color: #333;
                }
            }
            .post-desc {
                display: block;
                padding-top: 11px;
                font-size: 13px;
                color: #999;
                line-height: 19px;
            }
        }
    }
`;

const PostItemComponent = ({ post, index }) => {
    return (
        <PostItemBlock>
            <div className="item">
                <Link to={`market/${index}`}>
                    <div className="thumbnail-block">
                        <img src={post.image} alt="thumbnail" />
                    </div>
                    <div className="post-info-block">
                        <div className="post-title">{post.name}</div>
                        <div className="post-cost">{post.price}</div>
                        <div className="post-desc">{post.desc}</div>
                    </div>
                </Link>
            </div>
        </PostItemBlock>
    );
};
export default PostItemComponent;
