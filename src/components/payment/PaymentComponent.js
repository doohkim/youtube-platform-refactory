import React from 'react';
import styled from 'styled-components';
import PaymentAddressInfoComponent from './PaymentAddressInfoComponent';
import PaymentCouponInfoComponent from './PaymentCouponInfoComponent';
import PaymentMethodInfoComponent from './PaymentPersonalInfoComponent';
import PaymentProductListComponent from './PaymentProductListComponent';
import PaymentUserInfoComponent from './PaymentUserInfoComponent';
import PaymentPersonalInfoComponent from './PaymentPersonalInfoComponent';
const PaymentBlock = styled.div`
    width: 1080px;
    margin: auto;
    .page-tit {
        width: 100%;
        padding: 50px 0 51px;
        h2 {
            font-weight: 700;
            font-size: 28px;
            color: #333;
            line-height: 35px;
            text-align: center;
        }
    }
    .content {
        width: 100%;
        padding-bottom: 60px;
        background-color: beige;
        font-weight: 400;

    }
`;

const PaymentComponent = () => {
    return (
        <PaymentBlock>
            <div className="page-tit">
                <h2>장바구니</h2>
            </div>
            <div className="content">
                <PaymentProductListComponent />
                <PaymentUserInfoComponent />
                <PaymentAddressInfoComponent />
                <PaymentCouponInfoComponent />
                <PaymentMethodInfoComponent />
                <PaymentPersonalInfoComponent />
            </div>
        </PaymentBlock>
    );
};
export default PaymentComponent;
