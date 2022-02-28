import React from 'react';
import styled from 'styled-components';
import PostGoodsIntroComponent from './explain/PostGoodsIntroComponent';

const PostViewInfomationBlock = styled.div`
    width: 100%;
    margin-top: 50px;
    div {
        word-break: break-all;
    }
    .tab-group-block {
        display: flex;
        width: 100%;
        .tab-block {
            display: flex;
            width: 25%;
            /* vertical-align: top; */
            text-align: center;
            .tab {
                text-align: center;
                justify-content: center;
                display: flex;
                width: 100%;
                height: 60px;
                line-height: 59px;
                text-align: center;
                color: #666;
                font-size: 16px;
                font-weight: 700;
                letter-spacing: -0.3px;
                font-family: noto sans;
                background-color: #fafafa;
                border: 1px solid #eee;
                border-left: none;
                .count-review {
                    position: relative;
                    left: 4px;
                }
            }
        }
    }
    .goods-view-infomation-content {
    }
    .goods-check-point-block {
        .check-title-block {
            display: inline-block;
            position: relative;
            z-index: 10;
            font-size: 50px;
            width: 100%;
            margin-bottom: 70px;
            font-family: sans-serif;
            font-weight: 700;
            color: #666;
            .check-title {
                display: inline-block;
                position: relative;
                z-index: 10;
                margin-left: auto;
                margin-right: auto;
                padding: 0 15px;
                background-color: #fff;
                text-shadow: 2px 0;
            }
        }
    }
`;

const PostViewInfomationComponent = () => {
    return (
        <PostViewInfomationBlock>
            <div className="tab-group-block">
                <div className="tab-block">
                    <div class="tab">상세설명</div>
                </div>
                <div className="tab-block">
                    <div class="tab">상세정보</div>
                </div>
                <div className="tab-block">
                    <div class="tab">
                        상세정보<div className="count-review">(34456)</div>
                    </div>
                </div>
                <div className="tab-block">
                    <div class="tab">문의</div>
                </div>
            </div>
            <PostGoodsIntroComponent />
            <div className="goods-check-point-block">
                <div className="check-title-block">
                    <div className="check-title">Kurly's Check Point</div>
                </div>
            </div>
        </PostViewInfomationBlock>
    );
};
export default PostViewInfomationComponent;
