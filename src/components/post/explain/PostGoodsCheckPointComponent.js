import React from 'react';
import styled from 'styled-components';

const PostGoodsCheckPointBlock = styled.div`
    padding: 50px;
    border: 1px solid #b9b9b9;
    margin-bottom: 170px;
    .check-title-block {
        font-size: 50px;
        width: 100%;
        margin-bottom: 70px;
        display: flex;
        justify-content: center;
        font-family: sans-serif;
        font-weight: 700;
        color: #666;
        .check-title {
            padding: 0 15px;
            background-color: #fff;
            text-shadow: 2px 0;
        }
        
    }
    .goods-check-point-context-block {
            width: 100%;
            .pic {
                img {
                    border: 0;
                }
            }
        }
`;

const PostGoodsCheckPointComponent = () => {
    return (
        <PostGoodsCheckPointBlock>
            <div className="check-title-block">
                <div className="check-title">Kurly's Check Point</div>
            </div>
            <div className="goods-check-point-context-block">
                <div className="pic">
                    <img
                        src="https://img-cf.kurly.com/shop/data/goodsview/20200526/gv20000097163_1.jpg"
                        alt="check-point-img"
                    />
                </div>
            </div>
        </PostGoodsCheckPointBlock>
    );
};

export default PostGoodsCheckPointComponent;
