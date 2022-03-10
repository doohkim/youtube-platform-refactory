import React from 'react';
import styled from 'styled-components';
import { numberWithCommas } from '../../lib/fpp';
import palette from '../../lib/styles/palette';

const CartCalculateBlock = styled.div`
    width: 100%;
    background-color: #f2f2f2;
    padding: 9px 18px 18px 20px;
    .amount-block {
        padding-top: 9px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        .tit {
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
            white-space: nowrap;
        }
        .value {
            display: flex;
            .num {
                margin-top: -1.2px;
                font-size: 18px;
            }
            .won {
                font-size: 16px;
                vertical-align: 1px;
                padding-left: 2px;
            }
        }
    }
    .free-limit-block {
        padding-top: 3px;
        text-align: right;
        font-size: 12px;
        line-height: 18px;
        display: block;
        color: ${palette.cyan[5]};
    }
    .total-price-block {
        border-top: 1px solid ${palette.gray[4]};
        margin: 17px 0 0;
        padding-top: 17px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        font-size: 16px;
        line-height: 24px;
        white-space: nowrap;
        .total-tit {
            padding-top: 2px;
        }
        .total-value-block {
            display: flex;
            .total-num {
                font-weight: 600;
                font-size: 22px;
            }
            .total-won {
                padding-left: 2px;
                vertical-align: 1px;
            }
        }
    }
`;

const CartCalculateComponent = ({ totalAmount }) => {
    
    return (
        <CartCalculateBlock>
            <div className="amount-block">
                <div className="tit">상품금액</div>
                <div className="value">
                    <div className="num">
                        {numberWithCommas(totalAmount)}
                    </div>
                    <div className="won">원</div>
                </div>
            </div>
            <div className="amount-block">
                <div className="tit">상품할인금액</div>
                <div className="value">
                    <div className="num">0</div>
                    <div className="won">원</div>
                </div>
            </div>
            <div className="amount-block">
                <div className="tit">배송비</div>
                <div className="value">
                {totalAmount >= 40000 ? <div className="num">{0}</div>: <div className="num">+{numberWithCommas(3000)}</div>}
                    <div className="won">원</div>
                </div>
            </div>
            {totalAmount >= 40000 ? null :<div className="free-limit-block">
                {`${numberWithCommas(40000 - totalAmount)}원 축 주문시,`} <strong>무료배송</strong>
            </div>}
            <div className="total-price-block">
                <div className="total-tit">결제예정금액</div>
                <div className="total-value-block">
                    {totalAmount >= 40000 ?<div className="total-num">{numberWithCommas(totalAmount)}</div> :<div className="total-num">{numberWithCommas(totalAmount+3000)}</div>}
                    <div className="total-won">원</div>
                </div>
            </div>
        </CartCalculateBlock>
    );
};

export default CartCalculateComponent;
