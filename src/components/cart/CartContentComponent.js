import React from 'react';
import styled from 'styled-components';
import { AiFillCheckCircle, AiOutlineCheckCircle } from 'react-icons/ai';
import palette from '../../lib/styles/palette';
import { BsX } from 'react-icons/bs';
import { IoWaterOutline } from 'react-icons/io5';
const CartContentBlock = styled.div`
    width: 73%;
    .inner-select {
        width: 100%;
        .check-block {
            display: flex;
            width: 100%;
            padding-bottom: 20px;

            .check-box {
            }
            .text-box {
                padding-top: 3px;
                padding-left: 13px;
            }
            .divide-block{
                margin-left: 20px;
                margin-top: 5px;
                border-left: 1px solid ${palette.gray[4]};
                height: 18px;
            }
            .delete-block {
                padding-top: 3px;
                padding-left: 20px;
                height: 20px;
                margin-top:1px;

            }
        }
        .cart-block {
            width: 100%;
            border-top: 1px solid #333;
            .tit-box {
                .product-type-block{
                    display: flex;
                    padding-top: 15px;
                    .product-type-img{
                        padding-right: 10px;
                    }
                    .product-type-text {
                        display: flex;
                        align-items: center;

                    }
                }
            }
            .list-box {
            }
        }
    }
`;

const CartItemBlock = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    text-align: center;
    .cart-item-check-block {
        width: 5%;
    }
    .cart-item-product-img {
        width: 15%;
        padding-top: 20px;
        padding-bottom: 20px;
        img {
            width: 60%;
            height: 60%;
        }
    }
    .cart-item-product-name {
        width: 45%;
    }
    .cart-item-product-number-block {
        width: 15%;
        display: flex;
        overflow: hidden;
        border: 1px solid #dddfe1;
        border-radius: 3px;

        .number {
            width: 34%;
            font-size: 14px;
            font-weight: 400;
            padding-top: 4px;
        }
        .change-button {
            overflow: hidden;
            background-color: inherit;
            border: 0;
            width: 33%;
            height: 33%;
            font-size: 20px;
        }
    }
    .cart-item-product-price-block {
        width: 15%;
    }
    .cart-item-item-remove-block {
        width: 5%;
    }
`;

const CartItemComponent = () => {
    return (
        <CartItemBlock>
            <div className="cart-item-check-block">
                <AiFillCheckCircle size={24} color={`${palette.cyan[7]}`} />
            </div>
            <div className="cart-item-product-img">
                <img
                    src="https://img-cf.kurly.com/shop/data/goods/160099999866i0.jpg"
                    alt="product-thumbnail"
                />
            </div>
            <div className="cart-item-product-name">
                [Kurly's] 국산콩 두부 300g
            </div>
            <div className="cart-item-product-number-block">
                <button className="change-button">-</button>
                <div className="number">{1}</div>
                <button className="change-button">+</button>
            </div>
            <div className="cart-item-product-price-block">1,900원</div>
            <div className="cart-item-item-remove-block">
                <BsX size={28} color={`${palette.gray[5]}`} />
            </div>
        </CartItemBlock>
    );
};

const CartContentComponent = () => {
    const selectedNumber = 1;
    const totalNumber = 10;
    return (
        <CartContentBlock>
            <div className="inner-select">
                <div className="check-block">
                    <div className="check-box">
                        <AiFillCheckCircle
                            size={24}
                            color={`${palette.cyan[7]}`}
                        />
                    </div>
                    <div className="text-box">
                        {`전체선택(${selectedNumber}/${totalNumber})`}
                    </div>
                    <div className="divide-block"></div>
                    <div className="delete-block">선택삭제</div>
                </div>
                <div className="cart-block">
                    <div className="tit-box">
                        <div className="product-type-block">
                            <div className="product-type-img"><IoWaterOutline size={30} color={`${palette.gray[6]}`}/></div>
                            <div className="product-type-text">냉장 상품</div>
                        </div>
                    </div>
                    <div className="list-box">
                        <CartItemComponent />
                    </div>
                </div>
            </div>
        </CartContentBlock>
    );
};
export default CartContentComponent;
