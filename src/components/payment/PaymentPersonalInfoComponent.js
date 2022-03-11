import React from 'react';
import styled from 'styled-components';
import { AiOutlineCheckCircle, AiFillCheckCircle } from 'react-icons/ai';
import palette from '../../lib/styles/palette';
const PaymentPersonalInfoBlock = styled.div`
    border-bottom: 1px solid #f4f4f4;
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
    .agree-block {
        .agree-first-block {
            padding-top: 20px;
            display: flex;
            .toggle-block {
            }
            .toggle-text {
                font-size: 18px;
                font-weight: 700;
                color: #333;
                line-height: 24px;
                padding-left: 15px;
            }
        }
        .agree-second-block {
            .personal-agree-list-block {
                display: flex;
                .agree-text {
                    width: 400px;
                    display: flex;
                    padding-top: 4px;
                    padding-left: 40px;
                    .emph {
                        padding-left: 4px;
                        color: #999;
                    }
                }
                .agree-description {
                    color: ${palette.cyan[5]};
                    line-height: 30px;
                    cursor: pointer;
                }
            }
        }
    }
    .description-block {
        padding-top: 20px;
        font-size: 12px;
        line-height: 18px;
        color: #666666;
        padding-bottom: 20px;
    }
`;

const PaymentPersonalInfoComponent = ({
    onClick,
    agreeOrder,
    setAgreeOrder,
}) => {
    return (
        <PaymentPersonalInfoBlock>
            <div className="title-block">
                <div className="title">개인정보 수집/제공</div>
            </div>
            <div className="agree-block">
                <div className="agree-first-block">
                    <div className="toggle-block" onClick={() => onClick()}>
                        {agreeOrder ? (
                            <AiFillCheckCircle
                                size={24}
                                color={`${palette.cyan[5]}`}
                            />
                        ) : (
                            <AiOutlineCheckCircle
                                size={24}
                                color={`${palette.gray[3]}`}
                            />
                        )}
                    </div>
                    <div className="toggle-text">결제 진행 필수 동의</div>
                </div>
                <div className="agree-second-block">
                    <div className="personal-agree-list-block">
                        <div className="agree-text">
                            개인정보 수집 · 이용 및 처리 동의
                            <div className="emph">(필수)</div>
                        </div>
                        <div className="agree-description">{`보기>`}</div>
                    </div>
                    <div className="personal-agree-list-block">
                        <div className="agree-text">
                            결제대행 서비스 약관 동의
                            <div className="emph">(필수)</div>
                        </div>
                        <div className="agree-description">{`보기>`}</div>
                    </div>
                    <div className="personal-agree-list-block">
                        <div className="agree-text">
                            전자지급 결제대행 서비스 이용약관 동의
                            <div className="emph">(필수)</div>
                        </div>

                        <div className="agree-description">{`보기>`}</div>
                    </div>
                </div>
            </div>
            <div className="description-block">
                마켓컬리에서 판매되는 상품 중에는 마켓컬리에 입점한 개별
                판매자가 판매하는 마켓플레이스(오픈마켓) 상품이 포함되어
                있습니다.
                <br />
                마켓플레이스(오픈마켓) 상품의 경우 컬리는 통신판매중개자로서
                통신판매의 당사자가 아닙니다. 컬리는 해당 상품의 주문, 품질,
                교환/환불 등 의무와 책임을 부담하지 않습니다.
            </div>
        </PaymentPersonalInfoBlock>
    );
};
export default PaymentPersonalInfoComponent;
