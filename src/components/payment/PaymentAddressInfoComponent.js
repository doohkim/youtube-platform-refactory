import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const PaymentAddressInfoBlock = styled.div`
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
    .address-block {
        padding-top: 20px;
        font-weight: 400;
        font-family: sans-serif;
        font-size: 14px;
        .info-block {
            display: flex;
            padding-bottom: 25px;
            .column-block {
                font-weight: bold;
                width: 20%;
            }
            .value-block {
                width: 80%;

                .default-address {
                    width: 74px;
                    height: 22px;
                    border-radius: 11px;
                    font-size: 12px;
                    background-color: #f4f4f4;
                    font-weight: 700;
                    color: #666;
                    text-align: center;
                    line-height: 23px;
                }
                .address-block {
                    padding-top: 15px;
                    line-height: 24px;
                    color: #333;
                    display: block;
                }
                .phone-block {
                    line-height: 24px;
                    color: #333;
                    display: block;
                }
                .tag-block {
                    padding-top: 10px;
                    color: ${palette.cyan[5]};
                }
                .way-block {
                    padding-top: 10px;
                    color: #666;
                    line-height: 24px;
                    .how-block {
                        display: flex;                        
                        .how-to {
                        }
                        .or {
                            width: 1px;
                            height: 14px;
                            background-color: #ddd;
                            margin-top: 4px;
                            margin-left: 10px;
                            margin-right: 10px;
                        }
                        .how-text {
                        }
                    }
                }
            }
        }
    }
`;

const PaymentAddressInfoComponent = () => {
    return (
        <PaymentAddressInfoBlock>
            <div className="title-block">
                <div className="title">배송 정보</div>
            </div>
            <div className="address-block">
                <div className="info-block">
                    <div className="column-block">배송지</div>
                    <div className="value-block">
                        <div className="default-address">기본배송지</div>
                        <div className="address-block">
                            경기도 광명시 시청로26 302호
                        </div>
                        <div className="tag-block">샛별배송</div>
                    </div>
                </div>
                <div className="info-block">
                    <div className="column-block">상세정보</div>
                    <div className="value-block">
                        <div className="phone-block">김도오,010-4011-6804</div>
                        <div className="way-block">
                            <div className="how-block">
                                <div className="how-to">문앞</div>
                                <div className="or"></div>
                                <div className="how-text">자유 출입 가능</div>
                            </div>
                            <div className="how-block">
                                <div className="how-to">배송완료 메세지</div>
                                <div className="or"></div>
                                <div className="how-text">배송 직후</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PaymentAddressInfoBlock>
    );
};
export default PaymentAddressInfoComponent;
