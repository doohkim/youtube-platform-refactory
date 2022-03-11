import React from 'react';
import styled from 'styled-components';

const PaymentUserInfoBlock = styled.div`
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
    }
    .user-block{
        padding-top: 20px;
        font-weight: 400;
        font-family: sans-serif;
        font-size: 14px;
        .info-block{
            display: flex;
            padding-bottom: 25px;
            .column-block{
                font-weight: bold;
                width: 20%;
            }
            .value-block{
                width: 80%;
            }
        }
    }
`;

const PaymentUserInfoComponent = () => {
    return (
        <PaymentUserInfoBlock>
            <div className="title-block">
                <div className="title">주문자 정보</div>
            </div>
            <div className="user-block">
                <div className="info-block">
                    <div className="column-block">보내는 분</div>
                    <div className="value-block">김도오</div>
                </div>
                <div className="info-block">
                    <div className="column-block">휴대폰</div>
                    <div className="value-block">01040116804</div>
                </div>
                <div className="info-block">
                    <div className="column-block">이메일</div>
                    <div className="value-block">dopa213@gmail.com</div>
                </div>
            </div>
        </PaymentUserInfoBlock>
    );
};
export default PaymentUserInfoComponent;
