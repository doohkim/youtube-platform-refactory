import React, { useCallback } from 'react';
import styled from 'styled-components';
import { numberWithCommas } from '../../lib/fpp';
import PostNumberousCartListComponent from './cart/PostNumberousCartListComponent';
import PostNumberousCartComponent from './cart/PostNumerousCartComponent';

const PostSectionViewBlock = styled.div`
    width: 100%;
    padding-top: 20px;
    letter-spacing: -0.5px;
    .inner-view-block {
        width: 100%;
        display: flex;
        .thumb-block {
            width: 39%;
            img {
                width: 100%;
            }
        }
        .goods-info-block {
            width: 59%;
            .title-block {
                width: 100%;
                padding: 10px 3rem 29px;
                .name {
                    display: block;
                    font-weight: 700;
                    line-height: 34px;
                    font-size: 24px;
                    word-break: break-all;
                }
                .short-desc {
                    display: block;
                    padding-top: 4px;
                    font-size: 14px;
                    color: #999;
                    line-height: 20px;
                    word-break: break-all;
                }
            }
            .price-block {
                width: 100%;
                padding-left: 3rem;

                .price {
                    display: flex;
                    font-family: Arial, Helvetica, sans-serif;
                    color: #333;
                    font-weight: 700;
                    font-size: 28px;
                    line-height: 30px;
                    letter-spacing: 0;
                    word-break: break-all;
                    .won {
                        padding: 3px 0 0 2px;
                        font-size: 18px;
                    }
                }
            }
            .feature-block {
                margin-top: 19px;
                padding-bottom: 19px;
                padding-left: 48px;

                .list-block {
                    display: flex;
                    border-top: 1px solid #f4f4f4;
                    overflow: hidden;
                    padding: 18px 0;
                    .column {
                        width: 20%;
                        color: #666;
                        font-size: 14px;
                        line-height: 20px;
                    }
                    .desc {
                        width: 60%;
                        overflow: hidden;
                        font-size: 14px;
                        line-height: 20px;
                        word-break: break-all;
                    }
                }
            }
        }
    }
    .cart-block {
        width: 100%;
        display: flex;
        .not-need-block {
            width: 39%;
        }
        .cart-put-block {
            width: 59%;
            padding-left: 3rem;
            .product-select-block {
                width: 100%;
                display: flex;
                border-top: 1px solid #f4f4f4;
                padding: 18px 0;
                overflow: hidden;
                .column {
                    width: 20%;
                    color: #666;
                    font-size: 14px;
                    line-height: 20px;
                    padding-top: 10px;
                }
                .total-block{
                    width: 60%;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-end;
                    .tit{
                        display: flex;
                        font-weight: 700;
                        font-size: 10px;
                        line-height: 20px;
                        vertical-align: 2px;
                        font-family: sans-serif;
                        align-items: flex-end;
                        .price{
                            padding-left: 8px;
                            font-weight: 700;
                            font-size: 24px;
                        }
                        .won{
                            padding-left: 2px;
                            font-size: 13px;
                            font-weight: 600;
                            line-height: 20px;
                            
                        }
                    }
                    .cart-put-btn{
                        padding-top: 20px;
                        width: 100%;
                        display: flex;
                        justify-content: center;
                        button{
                            width: 100%;
                            background-color: #5f0081;
                            border-radius: 3px;
                            font-size: 16px;
                            color: #f4f4f4;
                            border: 1px solid #5f0081;
                            cursor:pointer;
                            font-weight: 600;
                            padding-top: 10px;
                            padding-bottom: 10px;
                        }
                    }
                }
            }
        }
    }
`;
const PostSectionViewComponent = ({
    postDetail,
    postDetailError,
    selectProducts,
    input,
    onInsert,
    onChangeInput,
    onRemove,
    onDecrease,
    onIncrease,
    onClick
}) => {
    const {
        title,
        price,
        short_description,
        post_descriptions,
        post_images,
        products,
        
    } = postDetail;
    const topImage = post_images.filter(
        (postImage) => postImage.image_type === 'main',
    );

    const onChange = useCallback(
        (e) => {
            const found = products.find(
                (product) => product.name === e.target.value,
            );
            console.log('found', found)
            const { id, name, price } = found;
            onInsert(id, name, price, post_images);
            onChangeInput(input);
        },
        [onChangeInput, input,onInsert, post_images, products],
    );

    
    return (
        <PostSectionViewBlock>
            <div className="inner-view-block">
                <div className="thumb-block">
                    <img
                        src={topImage[0].image.replace(
                            'http://youtube-market-front.s3.amazonaws.com/https%3A/',
                            'https://',
                        )}
                        alt="thumbnail"
                    />
                </div>
                <div className="goods-info-block">
                    <div className="title-block">
                        <div className="name">{title}</div>
                        <div className="short-desc">{short_description}</div>
                    </div>
                    <div className="price-block">
                        <div className="price">
                            {numberWithCommas(price)}
                            <div className="won">원</div>
                        </div>
                    </div>
                    <div className="feature-block">
                        {post_descriptions.map((descriptionFactor) => (
                            <div
                                className="list-block"
                                key={descriptionFactor.id}
                            >
                                <div className="column">
                                    {descriptionFactor.title}
                                </div>
                                <div className="desc">
                                    {descriptionFactor.content}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="cart-block">
                <div className="not-need-block"></div>
                <div className="cart-put-block">
                    <div className="product-select-block">
                        <div className="column">상품 선택</div>
                        <PostNumberousCartComponent
                            onChange={onChange}
                            input={input}
                            numberWithCommas={numberWithCommas}
                            products={products}
                        />
                    </div>
                </div>
            </div>
            <div className="cart-block">
                <div className="not-need-block"></div>
                <div className="cart-put-block">
                    <div className="product-select-block">
                        <div className="column"></div>
                        <PostNumberousCartListComponent
                            selectProducts={selectProducts}
                            onRemove={onRemove}
                            onDecrease={onDecrease}
                            onIncrease={onIncrease}
                            numberWithCommas={numberWithCommas}
                        />
                    </div>
                </div>
            </div>
            <div className="cart-block">
                <div className="not-need-block"></div>
                <div className="cart-put-block">
                    <div className="product-select-block">
                        <div className="column"></div>
                        <div className="total-block">
                            <div className="tit">총 상품금액:<div className="price">0</div><div className="won">원</div></div>
                            <div className="cart-put-btn"><button onClick={onClick}>장바구니</button></div>
                        </div>
                    </div>
                </div>
            </div>
        </PostSectionViewBlock>
    );
};
export default PostSectionViewComponent;
