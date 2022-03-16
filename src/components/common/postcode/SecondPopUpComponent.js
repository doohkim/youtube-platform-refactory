import React from 'react';
import styled from 'styled-components';
import palette from '../../../lib/styles/palette';

const SecondPopUpBlock = styled.div`
    min-height: 320px;
    padding: 0 30px;
    .second-tit-block {
        .second-tit {
            width: 100%;
            display: flex;
            text-align: center;
            padding: 20px 0 9px;
            font-weight: 700;
            font-size: 22px;
            .delivery-type {
                color: ${palette.cyan[5]};
            }
        }
        .second-desc {
            font-size: 16px;
            line-height: 22px;
            color: #999;
        }
    }
    .field-block {
        width: 100%;
        .extra-address-block {
            padding-top: 30px;
            width: 100%;
            .extra-address-input {
                border: 1px solid ${palette.cyan[5]};
                padding-left: 10px;
                width: 100%;
                height: 44px;
                border-radius: 3px;
                font-family: sans-serif;
                font-size: 14px;
            }
        }
    }
    .btn-block {
        margin-top: 10px;
        button {
            background-color: ${palette.cyan[5]};
            border: 1px solid ${palette.cyan[5]};
            color: #fff;
            width: 100%;
            height: 44px;
            border-radius: 3px;
            font-weight: 700;
            font-size: 14px;
            line-height: 42px;
        }
    }
`;

const SecondPopUpComponent = ({onChange, onClick, detailAddress}) => {
    return (
        <SecondPopUpBlock>
            <div className="second-tit-block">
                <div className="second-tit">
                    <div className="delivery-type">새벽배송</div>
                    <div>지역입니다</div>
                </div>

                <div className="second-desc">
                    매일 아침, 문 앞까지 신선함을 전해 드려요
                </div>
            </div>
            <div className="field-block">
                <div className="extra-address-block">
                    <input
                        className="extra-address-input"
                        placeholder="상세주소 입력을 해주세요"
                        onChange={onChange}
                        value={detailAddress}
                    />
                </div>
            </div>
            <div className="btn-block">
                <button onClick={onClick}>저장</button>
            </div>
        </SecondPopUpBlock>
    );
};
export default SecondPopUpComponent;
