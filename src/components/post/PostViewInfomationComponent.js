import React from 'react';
import styled from 'styled-components';

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
            vertical-align: top;
            .tab {
                display: flex;;
                width: 100%;
                height: 60px;
                line-height: 59px;
                text-align: center;
                display: block;
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
                    top: -1px;
                }
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
                    {' '}
                    <div class="tab">문의</div>
                </div>
            </div>
        </PostViewInfomationBlock>
    );
};
export default PostViewInfomationComponent;
