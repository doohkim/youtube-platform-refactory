import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { AiOutlineUp, AiOutlineDown } from 'react-icons/ai';
const PaymentProductListBlock = styled.div`
    padding-bottom: 50px;
    color: #333;
    .title-block {
        padding-top: 14px;
        padding-bottom: 16px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #333;
        .title {
            font-weight: bold;
            font-size: 20px;

            line-height: 29px;
            clear: both;
            font-family: sans-serif;
        }
        .outline-arrow {
            padding-right: 10px;
            font-weight: bold;
        }
    }
    .item-list-block {
        border-top: 1px solid #333;
        padding-top: 29px;
        padding-bottom: 29px;
        font-weight: 700;
        font-size: 16px;
        border-bottom: 1px solid #f4f4f4;
        display: flex;
        justify-content: center;
    }
`;

const PaymentProductItemBlock = styled.div`
    height: 128px;
    overflow: hidden;
    border-bottom: 1px solid #f4f4f4;
    display: flex;
    align-items: center;
    padding-bottom: 8px;
    .thumb-block {
        width: 6%;
        height: 78px;

        img {
            width: 100%;
        }
    }
    .name-block {
        width: 70%;
        padding-left: 20px;
        font-size: 14px;
        line-height: 24px;

        .product-name {
            font-weight: 700;
            font-size: 16px;
            color: #000;
        }
        .post-name {
            padding-top: 6px;

            color: #999;
            line-height: 22px;
        }
    }
    .ea-block {
        padding-right: 15px;
        text-align: right;
        width: 11%;
        color: #333;
    }
    .price-block {
        text-align: right;
        padding-right: 15px;
        width: 13%;
        font-weight: 700;
        font-size: 16px;
        white-space: nowrap;
    }
`;

const PaymentProductItemComponent = () => {
    return (
        <PaymentProductItemBlock>
            <div className="thumb-block">
                <img
                    src="https://img-cf.kurly.com/shop/data/goods/1582679290204i0.jpg"
                    alt="thumb"
                />
            </div>
            <div className="name-block">
                <div className="product-name">
                    [남향푸드또띠아] 하와이안 브리또
                </div>
                <div className="post-name">
                    [남향푸드또띠아] 간편 간식 브리또 10종
                </div>
            </div>
            <div className="ea-block">1개</div>
            <div className="price-block">3,200원</div>
        </PaymentProductItemBlock>
    );
};

const PaymentProductListComponent = () => {
    const [productListOpen, setProductListOpen] = useState(false);
    const onToggle = useCallback(() => {
        setProductListOpen(!productListOpen);
    }, [productListOpen]);

    const num = 1;
    return (
        <PaymentProductListBlock>
            <div className="title-block">
                <div className="title">주문상품</div>
                <div className="outline-arrow" onClick={() => onToggle()}>
                    {productListOpen ? (
                        <AiOutlineUp size={28} />
                    ) : (
                        <AiOutlineDown size={28} />
                    )}
                </div>
            </div>
            {productListOpen ? (
                <PaymentProductItemComponent />
            ) : (
                <div className="item-list-block">
                    [남향푸드또띠아] 하와이안 브리또외
                    <div className="ea">{`${num}개`}</div>상품을 주문합니다.
                </div>
            )}
        </PaymentProductListBlock>
    );
};
export default PaymentProductListComponent;
