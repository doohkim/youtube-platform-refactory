import React from 'react';
import styled from 'styled-components';
import CartContentComponent from './CartContentComponent';
import CartTotalInfoComponent from './CartTotalInfoComponent';

const CartBlock = styled.div`
    width: 1080px;
    margin: auto;
    padding-bottom: 4rem;
    .page-tit {
        width: 100%;
        margin: 0 auto;
        overflow: hidden;
        padding: 50px 0 51px;
        h2 {
            font-weight: 700;
            font-size: 28px;
            color: #333;
            line-height: 35px;
            text-align: center;
        }
    }
    .content{
        display: flex;
    }
`;

const CartComponent = () => {
    return (
        <CartBlock>
            <div className="page-tit">
                <h2>장바구니</h2>
            </div>
            <div className="content">
                <CartContentComponent />
                <CartTotalInfoComponent />
            </div>
        </CartBlock>
    );
};
export default CartComponent;
