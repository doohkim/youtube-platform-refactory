import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import PaymentAddressInfoComponent from './PaymentAddressInfoComponent';
// import PaymentCouponInfoComponent from './PaymentCouponInfoComponent';
// import PaymentMethodInfoComponent from './PaymentMethodInfoComponent';
import PaymentPersonalInfoComponent from './PaymentPersonalInfoComponent';
import PaymentProductListComponent from './PaymentProductListComponent';
import PaymentUserInfoComponent from './PaymentUserInfoComponent';
import { numberWithCommas } from '../../lib/fpp';
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
        font-weight: 400;
    }
    .bth-block {
        display: flex;
        justify-content: center;
        padding-top: 40px;

        button {
            border-radius: 3px;
            width: 240px;
            height: 56px;
            display: block;
            color: #fff;
            font-weight: 600;
            font-size: 15px;
        }

        .disabled-btn {
            border: 1px solid ${palette.gray[5]};
            background-color: ${palette.gray[5]};
        }
        .possible-btn {
            border: 1px solid ${palette.cyan[5]};
            background-color: ${palette.cyan[5]};
            cursor: pointer;
        }
    }
`;

const PaymentComponent = ({
    selectedAddress,
    selectedAddressError,
    selectedAddressLoading,
    cartFilterData,
    cartFilterError,
    cartFilterLoading,
    getTotalAmount,
    onClick,
}) => {
    const [agreeOrder, setAgreeOrder] = useState(false);
    const onPersonalAgreeClick = useCallback(() => {
        setAgreeOrder(!agreeOrder);
    }, [agreeOrder]);

    if (selectedAddressError || cartFilterError) {
        return <PaymentBlock>api 에러</PaymentBlock>;
    }
    return (
        <PaymentBlock>
            <div className="page-tit">
                <h2>장바구니</h2>
            </div>
            <div className="content">
                {!cartFilterLoading && cartFilterData && (
                    <PaymentProductListComponent
                        cartFilterData={cartFilterData}
                    />
                )}
                {!selectedAddressLoading && selectedAddress && (
                    <PaymentUserInfoComponent
                        userInfo={selectedAddress.results[0]}
                    />
                )}
                <PaymentAddressInfoComponent />
                {/* <PaymentCouponInfoComponent /> */}
                {/* <PaymentMethodInfoComponent /> */}
                <PaymentPersonalInfoComponent
                    agreeOrder={agreeOrder}
                    setAgreeOrder={setAgreeOrder}
                    onPersonalAgreeClick={onPersonalAgreeClick}
                />
                <div className="bth-block">
                    {agreeOrder ? (
                        <button
                            className="possible-btn"
                            onClick={() => onClick(cartFilterData)}
                        >
                            {numberWithCommas(getTotalAmount(cartFilterData))}원
                            결제하기
                        </button>
                    ) : (
                        <button disabled className="disabled-btn">
                            동의하기 버튼을 눌러주세요
                        </button>
                    )}
                </div>
            </div>
        </PaymentBlock>
    );
};
export default PaymentComponent;
