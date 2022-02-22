import React from 'react';
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
            background-color: #f9f8f9;
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
            .post-cost{
                display: block;
                padding-top: 7px;
                font-size: 18px;
                line-height: 29px;
                .post-price{
                    font-weight: 800;
                    color: #333;
                }
            }
            .post-desc{
                display: block;
                padding-top: 11px;
                font-size: 13px;
                color: #999;
                line-height: 19px;
            }
        }
    }
`;

const PostItemComponent = () => {
    return (
        <PostItemBlock>
            <div className="item">
                <div className="thumbnail-block"></div>
                <div className="post-info-block">
                    <div className="post-title">[동남집 양지곰탕 600g</div>
                    <div className="post-cost">6,200원</div>
                    <div className="post-desc">얇게 썬 고기와 맑은 국물의 조화</div>
                </div>
            </div>
        </PostItemBlock>
    );
};
export default PostItemComponent;
