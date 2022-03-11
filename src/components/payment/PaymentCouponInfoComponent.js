import React from 'react';
import styled from 'styled-components';

const PaymentCouponInfoBlock = styled.div`
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
    }
`;

const PaymentCouponInfoComponent = () => {
    return (
        <PaymentCouponInfoBlock>
            <div className="title-block">
                <div className="title">쿠폰 / 적립금</div>
            </div>
        </PaymentCouponInfoBlock>
    );
};
export default PaymentCouponInfoComponent;
