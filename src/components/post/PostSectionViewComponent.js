import React, { useCallback } from 'react';
import styled from 'styled-components';

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
        padding-bottom: 40px;
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
                .select-block {
                    width: 60%;
                    overflow: hidden;
                    font-size: 14px;
                    line-height: 20px;
                    word-break: break-all;
                    text-align: justify;
                    .select-box {
                        display: block;
                        overflow: hidden;
                        width: 100%;
                        padding: 9px 0 9px 15px;
                        border: 2px solid #f4f4f4;
                        font-size: 12px;
                        line-height: 20px;
                        .option-block {
                            color: #fff;
                            background-color: white;
                            text-align: justify;
                            
                        }
                    }
                }
            }
        }
    }
`;
const PostSectionViewComponent = ({ postDetail, postDetailError, input, onChangeInput, onInsert }) => {
    const {
        title,
        price,
        short_description,
        full_description,
        post_descriptions,
        post_images,
        products,
    } = postDetail;
    const topImage = post_images.filter(
        (postImage) => postImage.image_type === 'main',
    );

    const onChange = useCallback((e) => {
        const found = products.find(
            (product) => product.name === e.target.value,
        )
        const { id, name, price} = found;
        onInsert(id, name, price)
        onChangeInput(input)

    }, [onChangeInput])

    const numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    };
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
                        <div className="select-block">
                            <select className="select-box" onChange={onChange}>
                                <option
                                    className="option-block"
                                    value=""
                                    hidden
                                >
                                    상품선택
                                </option>
                                {products.map((product) => (
                                    <option
                                        className="option-block"
                                        key={product.id}
                                        value={product.name}
                                    >
                                        {product.name}(
                                        {numberWithCommas(product.price)}원)
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </PostSectionViewBlock>
    );
};
export default PostSectionViewComponent;
