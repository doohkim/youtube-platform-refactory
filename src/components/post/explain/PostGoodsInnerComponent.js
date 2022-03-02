import React from 'react'
import styled from 'styled-components'

const PostGoodsInnerBlock = styled.div`
    width: 100%;
    border-top: 1px solid #b9b9b9;
    padding-top: 50px;
    margin-bottom: 170px;
    .inner-title-block {
        font-size: 50px;
        width: 100%;
        margin-bottom: 70px;
        display: flex;
        justify-content: center;
        font-family: sans-serif;
        font-weight: 700;
        color: #666;
        .tips-title {
            padding: 0 15px;
            background-color: #fff;
            text-shadow: 2px 0;
        }
    }
    .goods-inner-context-block {
            width: 100%;
            .pic {
                img {
                    border: 0;
                }
            }
        }
`;

const PostGoodsInnerComponent = () => {
    return (
        <PostGoodsInnerBlock>
            <div className="inner-title-block">
                <div className="tips-title">
                    About Product
                </div>

            </div>
            <div className="goods-inner-context-block">
                <div className="pic">
                    <img
                        src="https://img-cf.kurly.com/shop/data/goodsview/20211224/gv20000261827_1.jpg"
                        alt="inner-img"
                    />
                </div>
            </div>
        </PostGoodsInnerBlock>
    )
}

export default PostGoodsInnerComponent;